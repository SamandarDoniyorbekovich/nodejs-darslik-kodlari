import Joi from "joi";
import { CustomError } from "../helpers/CustomError";

export class Validations {
 static async CreateValidation(data: any) {
        return await Joi.object({
            name: Joi.string().required().error(new CustomError("Name is invalid", 400)),
            username: Joi.string().required().error(new CustomError("Username is invalid", 400)),
            password: Joi.string().min(6).alphanum().required().error(new CustomError("Password is invalid", 400))
        }).validateAsync(data)
    }
}