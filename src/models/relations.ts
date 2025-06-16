import { Capital } from "./capital.model";
import { Category } from "./category.model";
import { Country } from "./country.model";
import { Product } from "./product.model";

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
}