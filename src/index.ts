import express, { Request, Response } from "express";
import sequelize from "./db/database";
import productRouter from "./routes/product.routes";
import userRouter from "./routes/user.routes";
import { loggerMiddleware } from "./middleware/logger.middleware";
import { errorMiddleware } from "./middleware/errorMiddleware";

const port = 5001;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/products", productRouter)
app.use("/users", userRouter)
app.use(errorMiddleware)

const serverStart = () => {
  sequelize.authenticate();
  console.log("Database connected successfully");
  sequelize.sync();
  // console.log("Models connnected");
  app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
  });
};
serverStart();
