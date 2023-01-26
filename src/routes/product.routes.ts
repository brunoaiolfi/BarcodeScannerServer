import { Router } from "express";
import { ProductController } from "../controllers/product";

export const ProductRoutes = Router();

ProductRoutes.post("/", ProductController.create)