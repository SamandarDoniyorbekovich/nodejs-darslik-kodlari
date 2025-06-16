import { Capital } from "./capital.model";
import { Category } from "./category.model";
import { Country } from "./country.model";
import { Group } from "./group.model";
import { Product } from "./product.model";
import { Student } from "./student.model";
import { Teacher } from "./teacher.model";

export default function Relations(){
    Country.hasOne(Capital, {
        foreignKey:{
            name:"country_id",
            allowNull:false
        }
    })
    Capital.belongsTo(Country,{
       foreignKey:{
        name:"country_id",
        allowNull:false
       }
    })

    Category.hasMany(Product, {
        foreignKey:{
            name:"category_id",
            allowNull:false
        }
    })
    Product.belongsTo(Category, {
        foreignKey:{
            name:"category_id",
            allowNull:false
        }
    })

    Teacher.belongsToMany(Student,{
        through:Group,
        foreignKey:"teacher_id",
        otherKey:"student_id"
    })

    Student.belongsToMany(Teacher,{
        through:Group,
        foreignKey:"student_id",
        otherKey:"teacher_id"
    })
}