import { z } from "zod";

const landmarkPoint = z.object({
  x: z.number(),
  y: z.number(),
  z: z.number().optional(),
});

const hand = z.array(landmarkPoint);
const frame = z.array(hand);

export const translateSchema = z.object({
  dialect: z.string().min(1),
  landmarksJson: z.array(frame).min(1),
});
