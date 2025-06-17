import { NextFunction, Request, Response } from "express";
import { Student } from "../models/student.model"; 
import { Teacher } from "../models/teacher.model"; 
import { CustomError } from "../helpers/CustomError"; 

export const GroupController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // const groups = await Group.findAll({
      //   include: [Teacher],
      // });

      res.status(200).json({
        ok: true,
        // data: groups,
      });
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { student_id, teacher_id } = req.body;

      const teacher = await Teacher.findByPk(teacher_id);
      const student = await Student.findByPk(student_id);

      if (teacher && student) {
        // await teacher.addStudent(student);
        await student.addTeacher(teacher);
      } else {
        throw new CustomError("Please send me real persons", 400);
      }

      res.status(201).json({
        ok: true,
        message: "Group added!",
      });
    } catch (error) {
      next(error);
    }
  },
};