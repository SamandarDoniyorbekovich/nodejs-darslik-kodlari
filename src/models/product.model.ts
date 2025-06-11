import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";

export class Product extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: string;
  public store!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: "products",
  }
);
