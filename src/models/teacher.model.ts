import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";
import { Student } from "./student.model";

export class Teacher extends Model {
  public id!: number;
  public name!: string;
    public addStudent!: (student:Student) => {}
}

Teacher.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: "teachers" }
);
