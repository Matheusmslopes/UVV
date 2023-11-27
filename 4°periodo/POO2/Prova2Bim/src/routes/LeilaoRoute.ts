import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";


const LeilaoRouter = Router();

LeilaoRouter.get("/leilao/list", LeilaoController.listLeilao);

LeilaoRouter.post("/leilao/create", LeilaoController.createLeilao);

LeilaoRouter.put("/leilao/update", LeilaoController.updateLeilao);

LeilaoRouter.delete("/leilao/delete", LeilaoController.deleteLeilao);

export default LeilaoRouter;