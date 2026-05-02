import { Request, Response } from "express";

export const getUser = (req : Request, res : Response) =>{
const users = [
    {id :1, name : "panji"},
    {id :2, name : "Davi"}
];

res.json({
    status:"success",
    data:users
});

};

export const createUser = (req : Request, res : Response) => {
    res.status(201).json({
        status:"success",
        message:`User ${name} berhasil dibuat`
    });
}