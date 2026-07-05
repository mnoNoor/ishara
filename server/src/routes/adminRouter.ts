import { Router } from "express";
import { recordSign } from "../controllers/adminController";
import { recordSignSchema } from "../validation/recordSignSchema";
import { validate } from "../middleware/validate";
const router = Router();

router.post("/signs/record", validate(recordSignSchema), recordSign);

export default router;
