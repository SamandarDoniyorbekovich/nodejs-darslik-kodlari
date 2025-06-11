import { NextFunction, Request, Response } from "express";

export const loggerMiddleware = (req:Request, res:Response, next:NextFunction) =>{
    console.log("logger worked");
    
    next()
}