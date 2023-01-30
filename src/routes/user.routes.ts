import { UserController } from './../controllers/user';
import { Router } from "express";

export const UserRoutes = Router();

UserRoutes.get("/all", UserController.listAll)
UserRoutes.get("/byId", UserController.findById)
UserRoutes.put("/", UserController.edit)