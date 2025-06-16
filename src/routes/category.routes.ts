import { Router } from "express";
import { categoryController } from "../controller/categories.controller";

const router = Router();

router.get('/', categoryController.getAllCategory)
router.post('/', categoryController.createCategory)

export default router