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

    async createCountry(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body

            const newCountry = await Country.create({ name })

            res.status(201).json({
                ok: true,
                data: newCountry,
                message: "Country created"
            })

        } catch (error) {
            next(error)
        }

    },

    async deleteCountry(req: Request, res: Response) {
        const countryId = req.params.id

        const targetCountryId = await Country.findByPk(countryId)

       const deletedCountry = await Country.destroy({
            where:{
                id:countryId
            }
        })

        res.status(200).json({
            ok:true,
            message:"Delete country"
        })
        
    }
}