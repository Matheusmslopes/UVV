import { Router } from "express";
import UserController from "../controllers/UserController"

const UserRouter = Router();

UserRouter.get("/users/list", UserController.listUsers);

UserRouter.post("/users/create", UserController.createUser);

UserRouter.put("/users/update", UserController.updateUser);

UserRouter.delete("/users/delete", UserController.deleteUser);

export default UserRouter;