import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  jsonb,
  varchar,
} from "drizzle-orm/pg-core";

export const words = pgTable("word", {
  id: serial("id").primaryKey(),
  word: varchar("word", { length: 255 }).notNull().unique(),
  category: varchar("category", { length: 100 }).notNull().default("general"),
  difficulty: varchar("difficulty", { length: 20 })
    .notNull()
    .default("beginner"),
  arabicText: text("arabic_text").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

export const signVariants = pgTable("sign_variants", {
  id: serial("id").primaryKey(),
  signId: integer("sign_id")
    .references(() => words.id)
    .notNull(),
  dialect: varchar("dialect", { length: 50 }).notNull(),
  videoUrl: text("video_url").notNull().default(""),
  imageUrls: jsonb("image_urls").$type<string[]>().default([]),
  landmarksJson: jsonb("landmarks_json").notNull(),
  sampleCount: integer("sample_count").default(1),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});
