import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database";

export class Group extends Model {
    public teacher_id!: number;
    public student_id!: number
}

Group.init(
    {
        teacher_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type:DataTypes.INTEGER, allowNull: false }
    },
    {
        sequelize,
        tableName:"groups",
        timestamps:false
    }
)