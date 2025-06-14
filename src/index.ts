import express, { Request, Response } from "express";
import sequelize from "./db/database";
import productRouter from "./routes/product.routes";
import userRouter from "./routes/user.routes";
import countrRouter from "./routes/country.routes";
import capitalRouter from "./routes/capital.routes";
import { errorMiddleware } from "./middleware/errorMiddleware";
import Relations from "./models/relations";

const port = 5001;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/products", productRouter)
app.use("/users", userRouter)
app.use("/country", countrRouter)
app.use("/capital", capitalRouter)
app.use(errorMiddleware)

const serverStart = () => {
  sequelize.authenticate();
  console.log("Database connected successfully");
  sequelize.sync();
  Relations()
  // console.log("Models connnected");
  app.listen(port, () => {
    // console.log(`Server running on port: ${port}`);
  });
};
serverStart();
