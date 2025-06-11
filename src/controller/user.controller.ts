import { NextFunction, Request, Response } from "express";
import { Product } from "../models/product.model";
import { CustomError } from "../helpers/CustomError";
import { User } from "../models/user.model";
import Joi from "joi";
import { Validations } from "../validation/user.validation";

export const UserController = {

    async getAllUser(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.findAll();
            res.status(200).json({
                ok: true,
                data: users,
            });
        } catch (err) {
            next(err)
        }
    },

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, username, password } = req.body;

            await Validations.CreateValidation({ name, username, password })

            const newUser = await User.create({ name, username, password });

            res.status(201).json({
                ok: true,
                data: newUser,
                massege: "Malumot saqlandi",
            });
        } catch (error) {
            next(error)
        }
    },

    async updateUser(req: Request, res: Response) {
        const userId = req.params.id;
        const { name, username, password } = req.body;

        const targetUserId = await User.findByPk(userId)

        if (!targetUserId) {
            res.status(404).json({
                ok: false,
                message: "User not found"
            });
            return
        }

        await User.update(
            { name, username, password },
            {
                where: {
                    id: userId
                }
            },)
        res.status(200).json({
            ok: true,
            message: "Malumot o'zgartirildi",
            data: { id: userId, name, username, password }
        })
    },

    async deleteUser(req: Request, res: Response) {
        const userId = req.params.id;
        const targetUserId = await User.findByPk(userId)

        if (!targetUserId) {
            res.status(404).json({
                ok: false,
                message: "User not found"
            })
            return
        }

        const deleteUser = await User.destroy({
            where:{
                id:userId
            }
        });

        res.status(200).json({ok:true, message:"User deleted", data:targetUserId})

    }

}