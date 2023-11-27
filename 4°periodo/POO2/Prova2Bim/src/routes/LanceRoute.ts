import { Router } from "express";
import LanceController from "../controllers/LanceController";

const LanceRouter = Router();

LanceRouter.get("/lance/list", LanceController.listLance);

LanceRouter.post("/lance/create", LanceController.createLance);

LanceRouter.put("/lance/update", LanceController.updateLance);

LanceRouter.delete("/lance/delete", LanceController.deleteLance);

export default LanceRouter;