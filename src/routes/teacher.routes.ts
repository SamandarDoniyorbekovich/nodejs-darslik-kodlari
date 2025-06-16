import { Router } from "express";
import { TeacherController } from "../controller/teacher.controller";

const router = Router();

router.get("/", TeacherController.getAll);
router.post("/", TeacherController.create);

export default router;
