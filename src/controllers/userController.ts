import { Request, Response } from "express";
import { db } from "../DB";
import { users } from "../DB/schema";

export const getUser = async (req: Request, res: Response) => {

  try {
    const allUsers = await db.select().from(users);
    res.json({
      status: "success",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data user",
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Nama user diperlukan",
    });
  }

  try {
    await db.insert(users).values({ name });
    res.status(201).json({
      status: "Success",
      message: `User ${name} berhasil dibuat`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat user",
    });
  }
};