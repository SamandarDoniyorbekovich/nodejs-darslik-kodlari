import { NextFunction, Request, Response } from "express";
import { Capital } from "../models/capital.model";

export const capitalController = {

    async getAllCapital(req: Request, res: Response, next: NextFunction) {
        try {
            const countrys = await Capital.findAll()
            res.status(200).json({
                ok: true,
                data: countrys
            })
        } catch (error) {
            next(error)
        }
    },

    async createCapital(req: Request, res: Response, next:NextFunction) {
        try {
            const { name } = req.body

            const newCountry = Capital.create({ name })

            res.status(201).json({
                ok: true,
                message: "capital created",
                data: newCountry
            })

        } catch (error) {
            next(error)
        }

    }
}