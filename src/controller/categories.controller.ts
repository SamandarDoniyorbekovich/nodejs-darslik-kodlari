import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export const categoryController = {

    async getAllCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await Category.findAll({
                include:{
                    model:Product
                }
            })
            res.status(200).json({
                ok: true,
                data: categories
            })
        } catch (error) {
            next(error)
        }
    },

    async createCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body

            const newCategory = await Category.create({ name })

            res.status(201).json({
                ok: true,
                message: "Category created",
                data:newCategory
            })
        } catch (error) {
            next(error)
        }

    }
}