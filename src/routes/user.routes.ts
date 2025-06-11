import { Request, Response, Router } from "express";
import { UserController } from "../controller/user.controller";

const router = Router();

router.get("/", UserController.getAllUser);

router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
