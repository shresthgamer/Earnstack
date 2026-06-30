import { Router } from "express";
import { db } from "@workspace/db";
import { signupsTable } from "@workspace/db/schema";
import { desc, gte, sql, like, or } from "drizzle-orm";

const router = Router();

const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "earnstack-admin-2024";

function requireAdmin(req: any, res: any, next: any) {
  const key = req.headers["x-admin-key"] ?? req.query.key;
  if (key !== ADMIN_SECRET) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  next();
}

router.get("/admin/signups", requireAdmin, async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 50));
    const offset = (page - 1) * limit;
    const search = typeof req.query.search === "string" ? req.query.search.trim() : "";
    const source = typeof req.query.source === "string" ? req.query.source.trim() : "";

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfToday.getDate() - startOfToday.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [totalResult, todayResult, weekResult, monthResult, sourceResult] = await Promise.all([
      db.select({ count: sql<number>`count(*)::int` }).from(signupsTable),
      db.select({ count: sql<number>`count(*)::int` }).from(signupsTable).where(gte(signupsTable.createdAt, startOfToday)),
      db.select({ count: sql<number>`count(*)::int` }).from(signupsTable).where(gte(signupsTable.createdAt, startOfWeek)),
      db.select({ count: sql<number>`count(*)::int` }).from(signupsTable).where(gte(signupsTable.createdAt, startOfMonth)),
      db.select({ source: signupsTable.source, count: sql<number>`count(*)::int` })
        .from(signupsTable)
        .groupBy(signupsTable.source)
        .orderBy(desc(sql`count(*)`)),
    ]);

    let query = db
      .select({
        id: signupsTable.id,
        name: signupsTable.name,
        email: signupsTable.email,
        source: signupsTable.source,
        createdAt: signupsTable.createdAt,
      })
      .from(signupsTable)
      .$dynamic();

    const conditions = [];
    if (search) {
      conditions.push(
        or(
          like(signupsTable.name, `%${search}%`),
          like(signupsTable.email, `%${search}%`)
        )
      );
    }
    if (source) {
      conditions.push(like(signupsTable.source, `%${source}%`));
    }

    const rows = await db
      .select({
        id: signupsTable.id,
        name: signupsTable.name,
        email: signupsTable.email,
        source: signupsTable.source,
        createdAt: signupsTable.createdAt,
      })
      .from(signupsTable)
      .where(conditions.length ? (conditions.length === 1 ? conditions[0] : sql`${conditions[0]} AND ${conditions[1]}`) : undefined)
      .orderBy(desc(signupsTable.createdAt))
      .limit(limit)
      .offset(offset);

    return res.json({
      success: true,
      stats: {
        total: totalResult[0]?.count ?? 0,
        today: todayResult[0]?.count ?? 0,
        thisWeek: weekResult[0]?.count ?? 0,
        thisMonth: monthResult[0]?.count ?? 0,
        bySources: sourceResult,
      },
      signups: rows,
      pagination: { page, limit, total: totalResult[0]?.count ?? 0 },
    });
  } catch (err) {
    console.error("Admin signups error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
