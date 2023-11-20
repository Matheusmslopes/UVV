import { Router } from "express";
import UserController from "../controllers/UserController"

const UserRouter = Router();

UserRouter.get("/users", UserController.listUsers);

UserRouter.post("/user", UserController.createUser);

UserRouter.put("/users", UserController.updateUser);

UserRouter.delete("/users", UserController.deleteUser);

export default UserRouter;