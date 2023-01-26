import cors from "cors";
import express from "express";
import { UserController } from "./controllers/user";
import { verifyToken } from "./middleware/verifyToken";
import { ProductRoutes } from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/user", UserController.create);

app.post("/login", UserController.login);

app.use(verifyToken);

app.use("/product", ProductRoutes);
app.listen(4001, () => console.log("Api rodando a todo vapor 🚂🚃🚃🚃"));
