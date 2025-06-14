import { Capital } from "./capital.model";
import { Country } from "./country.model";

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
}