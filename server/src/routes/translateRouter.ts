import { Router } from "express";
import { signToText, clearCache } from "../controllers/translateController";
import { translateSchema } from "../validation/translateSchema";
import { validate } from "../middleware/validate";

const router = Router();

router.post("/sign-to-text", validate(translateSchema), signToText);
router.post("/clear-cache", clearCache);

export default router;
