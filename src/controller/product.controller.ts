import { NextFunction, Request, Response } from "express";
import { Product } from "../models/product.model";
import { CustomError } from "../helpers/CustomError";

export const ProductController = {
  async getAllProducts(req: Request, res: Response) {
    const products = await Product.findAll();
    res.status(200).json({
      ok: true,
      data: products,
    });
  },
  async createProduct(req: Request, res: Response, next:NextFunction) {
    try {
      const { title, description, price, store } = req.body;      
      if (!title || !description || !price || !store) {
        throw new CustomError("imput all data", 403, "description")
      }

      const newProduct = await Product.create({ title, description, price, store });

      res.status(201).json({
        ok: true,
        data: newProduct,
        massege: "Malumot saqlandi",
      });
    } catch (error){
      next(error)
    }
  },
  async getProductById(req: Request, res: Response) {
    const productId = req.params.id;
    const targetProduct = await Product.findOne({ where: { id: productId } });

    if (!targetProduct) {
      res.status(404).json({
        ok: false,
        message: "product not found",
      });
      return;
    }

    res.status(200).json({
      ok: true,
      data: targetProduct,
    });
  },
  async updateProduct(req: Request, res: Response) {
    const productId = req.params.id;
    const { title, description, price, store } = req.body;

    const targetProduct = await Product.findByPk(productId);

    if (!targetProduct) {
      res.status(404).json({
        ok: false,
        massege: "product not found",
      });
      return;
    }

    await Product.update(
      { title, description, price, store },
      {
        where: {
          id: productId,
        },
      }
    );

    res.status(200).json({
      ok: true,
      data: { ...targetProduct, title, description, price, store },
    });
  },
  async deleteProduct(req: Request, res: Response) {
    const productId = req.params.id;
    const targetProduct = await Product.findByPk(productId);
    if (!targetProduct) {
      res.status(404).json({ ok: false, message: "product not found" });
      return;
    }

    const deletedProduct = await Product.destroy({
      where: {
        id: productId,
      },
    });
    res.status(200).json({ ok: true, data: deletedProduct });
  }
}