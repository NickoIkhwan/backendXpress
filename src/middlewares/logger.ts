import { Request, Response, NextFunction  } from "express";

export const logger = (req : Request, res : Response, next : NextFunction) =>{
    console.log (`[${new Date().toISOString()}] ada request masuk : ${req.method} ${req.url}`);

    next();
}