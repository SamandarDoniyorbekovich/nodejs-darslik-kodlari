import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";

export class Teacher extends Model {
  public id!: number;
  public name!: string;
}

Teacher.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, tableName: "teachers" }
);
