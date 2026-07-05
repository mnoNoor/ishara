import { z } from "zod";

const landmarkPoint = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number().optional(),
  visibility: z.number().optional(),
});

const hand = z.array(landmarkPoint);

const frame = z.array(hand);

export const recordSignSchema = z.object({
  word: z.string().min(1).max(255),
  arabicText: z.string().min(1),
  category: z.string().optional().default("general"),
  difficulty: z
    .enum(["beginner", "intermediate", "advanced"])
    .optional()
    .default("beginner"),
  dialect: z.string().min(1),
  videoUrl: z.string().optional().default(""),
  imageUrls: z.array(z.string()).optional().default([]),
  landmarksJson: z.array(frame).min(1),
});
