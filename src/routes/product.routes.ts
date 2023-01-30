import { Router } from "express";
import { ProductController } from "../controllers/product";

export const ProductRoutes = Router();

ProductRoutes.post("/", ProductController.create);
ProductRoutes.put("/", ProductController.edit);
ProductRoutes.get("/all", ProductController.listAll);
ProductRoutes.get("/byId", ProductController.findById);
