import { NextFunction, Request, Response } from "express";
import { CustomError } from "../helpers/CustomError";

export const errorMiddleware = ( err:CustomError,req:Request, res:Response, next:NextFunction) =>{
    const statsus = 400;
    const errText = err?.text


    res.status(statsus).json({
        ok:false,
        message:err.message, 
        errText:errText || "asas"
    })
}