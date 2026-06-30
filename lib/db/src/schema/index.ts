import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const signupsTable = pgTable("signups", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  source: varchar("source", { length: 60 }).default("website"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSignupSchema = createInsertSchema(signupsTable).omit({ id: true, createdAt: true });
export type InsertSignup = z.infer<typeof insertSignupSchema>;
export type Signup = typeof signupsTable.$inferSelect;
