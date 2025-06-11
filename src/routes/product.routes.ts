import { Request, Response, Router } from "express";
import { Product } from "../models/product.model";
import { ProductController } from "../controller/product.controller";

const router = Router();

router.get("/", ProductController.getAllProducts);

router.post("/", ProductController.createProduct);

router.get("/:id", ProductController.getProductById);

router.put("/:id", ProductController.updateProduct);

// delete
router.delete("/:id", ProductController.deleteProduct);

export default router;
