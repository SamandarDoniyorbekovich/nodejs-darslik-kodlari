import { NextFunction, Request, Response } from "express";
import { Capital } from "../models/capital.model";
import { Country } from "../models/country.model";

export const capitalController = {

    async getAllCapital(req: Request, res: Response, next: NextFunction) {
        try {
            const countrys = await Capital.findAll({
                include:{
                    model:Country,
                    attributes:{
                        exclude:['createdAt']
                    }
                }
            })
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
            const { name, country_id } = req.body
            
            const newCapital = await Capital.create({ name, country_id })



            res.status(201).json({
                ok: true,
                data: newCapital,
                message: "capital created"
            })

        } catch (error) {
            next(error)
        }

    }
}