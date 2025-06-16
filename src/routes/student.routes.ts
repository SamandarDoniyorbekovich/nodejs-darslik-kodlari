import { Router } from "express";
import { StudentController } from "../controller/student.controller"; 

const router = Router();

router.get("/", StudentController.getAll);
router.post("/", StudentController.create);

export default router;
