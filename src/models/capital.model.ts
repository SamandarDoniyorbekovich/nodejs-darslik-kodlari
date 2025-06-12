import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";

export class Capital extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updateAt!: Date
}

Capital.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "Capitals"
})