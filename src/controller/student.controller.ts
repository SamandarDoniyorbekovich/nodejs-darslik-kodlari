import { NextFunction, Request, Response } from "express";
import { Student } from "../models/student.model"; 

export const StudentController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await Student.findAll({});

      res.status(200).json({
        ok: true,
        data: students,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const newStudent = await Student.create({ name });

      res.status(201).json({
        ok: true,
        data: newStudent,
        massege: "Student added!",
      });
    } catch (error) {
      next(error);
    }
  },
};
