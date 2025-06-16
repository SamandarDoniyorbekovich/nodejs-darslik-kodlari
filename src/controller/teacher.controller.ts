import { NextFunction, Request, Response } from "express";
import { Teacher } from "../models/teacher.model"; 

export const TeacherController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teachers = await Teacher.findAll({});

      res.status(200).json({
        ok: true,
        data: teachers,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const newTeacher = await Teacher.create({ name });

      res.status(201).json({
        ok: true,
        data: newTeacher,
        massege: "Teacher added!",
      });
    } catch (error) {
      next(error);
    }
  },
};
