import { NextFunction, Request, Response } from "express";
import { Country } from "../models/country.model";

export const countryController = {

    async getAllCountry(req: Request, res: Response, next: NextFunction) {
        try {
            const countrys = await Country.findAll()
            res.status(200).json({
                ok: true,
                data: countrys
            })
        } catch (error) {
            next(error)
        }
    },

    async createCountry(req: Request, res: Response, next:NextFunction) {
        try {
            const { name } = req.body

            const newCountry = Country.create({ name })

            res.status(201).json({
                ok: true,
                message: "Country created",
                data: newCountry
            })

        } catch (error) {
            next(error)
        }

    }
}