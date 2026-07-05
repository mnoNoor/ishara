import { Request, Response } from "express";
import {
  findBestMatch,
  clearTranslationCache,
} from "../services/translateService";

export async function signToText(req: Request, res: Response) {
  try {
    console.log(
      "📥 Received request body:",
      JSON.stringify(req.body).substring(0, 200),
    );

    const { dialect, landmarksJson } = req.body;
    console.log("📊 Dialect:", dialect);
    console.log("📊 Landmarks frames count:", landmarksJson?.length);
    console.log("📊 First frame sample:", landmarksJson?.[0]);

    if (!dialect || typeof dialect !== "string") {
      return res.status(400).json({
        message: "يجب تحديد اللهجة (dialect)",
      });
    }

    if (
      !landmarksJson ||
      !Array.isArray(landmarksJson) ||
      landmarksJson.length === 0
    ) {
      return res.status(400).json({
        message: "يجب إرسال إطارات الإشارة (landmarksJson) كمصفوفة غير فارغة",
      });
    }

    const result = await findBestMatch(landmarksJson, dialect);

    if (!result) {
      return res.status(404).json({
        message: "لم يتم العثور على إشارة مطابقة لهذه اللهجة",
      });
    }

    return res.status(200).json({
      word: result.word,
      arabicText: result.arabicText,
      confidence: result.confidence,
    });
  } catch (error) {
    console.error("خطأ في ترجمة الإشارة إلى نص:", error);
    return res.status(500).json({
      message: "حدث خطأ داخلي أثناء الترجمة",
      error: error instanceof Error ? error.message : "خطأ غير معروف",
    });
  }
}

export async function clearCache(req: Request, res: Response) {
  try {
    clearTranslationCache();
    return res.status(200).json({
      message: "تم مسح الكاش المؤقت بنجاح",
    });
  } catch (error) {
    return res.status(500).json({
      message: "فشل في مسح الكاش",
    });
  }
}
