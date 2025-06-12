import { Router } from "express";
import { capitalController } from "../controller/capital.contoller";

const router = Router();

router.get("/", capitalController.getAllCapital);

router.post("/", capitalController.createCapital);

export default router;
