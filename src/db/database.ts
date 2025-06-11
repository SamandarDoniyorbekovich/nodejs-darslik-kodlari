import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "!Samandar_2002",
  database: "crud_nodejs",
  logging: false,
  define: {
    timestamps: true,
  },
});

export default sequelize;
