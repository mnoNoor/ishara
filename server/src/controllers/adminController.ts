import { Request, Response } from "express";
import { words, signVariants } from "../db/schema";
import { db } from "../db/db";
import { eq } from "drizzle-orm";

export async function recordSign(req: Request, res: Response) {
  try {
    const {
      word,
      arabicText,
      category,
      difficulty,
      dialect,
      videoUrl,
      landmarksJson,
      imageUrls = [],
    } = req.body;

    await db.transaction(async (tx) => {
      const [existingWord] = await tx
        .select()
        .from(words)
        .where(eq(words.word, word))
        .limit(1);

      let signId: number;

      if (!existingWord) {
        const [newWord] = await tx
          .insert(words)
          .values({
            word,
            arabicText,
            category: category || "general",
            difficulty: difficulty || "beginner",
          })
          .returning();
        signId = newWord.id;
      } else {
        signId = existingWord.id;
      }

      await tx.insert(signVariants).values({
        signId,
        dialect,
        videoUrl: videoUrl || "",
        imageUrls,
        landmarksJson,
      });
    });

    res.status(201).json({
      message: "Sign recorded successfully",
    });
  } catch (error) {
    console.error("Error in recordSign:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}
