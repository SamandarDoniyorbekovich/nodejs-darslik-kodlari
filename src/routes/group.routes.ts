import { Router } from "express";
import { GroupController } from "../controller/group.controller"; 

const router = Router();

router.get("/", GroupController.getAll);
router.post("/", GroupController.create);

export default router;
