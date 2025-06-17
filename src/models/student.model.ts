import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";
import { Teacher } from "./teacher.model";

export class Student extends Model {
  public id!: number;
  public name!: string;
  public addTeacher!: (teacher:Teacher) => {}
}

Student.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: "students" }
);
