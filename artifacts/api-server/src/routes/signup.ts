import { Router } from "express";
import { db } from "@workspace/db";
import { signupsTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import crypto from "node:crypto";

const router = Router();

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function validateSignup(body: unknown): { ok: true; data: { name: string; email: string; password: string; source: string } } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body." };
  const { name, email, password, source } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2)
    return { ok: false, error: "Name must be at least 2 characters." };
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { ok: false, error: "Please enter a valid email address." };
  if (typeof password !== "string" || password.length < 8)
    return { ok: false, error: "Password must be at least 8 characters." };

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
      source: typeof source === "string" ? source : "website",
    },
  };
}

router.post("/signup", async (req, res) => {
  const validation = validateSignup(req.body);
  if (!validation.ok) {
    return res.status(400).json({ success: false, error: validation.error });
  }

  const { name, email, password, source } = validation.data;

  try {
    const existing = await db
      .select({ id: signupsTable.id })
      .from(signupsTable)
      .where(eq(signupsTable.email, email))
      .limit(1);

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        error: "An account with this email already exists.",
      });
    }

    const hashedPassword = hashPassword(password);

    await db.insert(signupsTable).values({ name, email, password: hashedPassword, source });

    return res.status(201).json({ success: true, message: "Account created successfully!" });
  } catch {
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again." });
  }
});

export default router;
