import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";

export class Student extends Model {
  public id!: number;
  public name!: string;
}

Student.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: "students" }
);
