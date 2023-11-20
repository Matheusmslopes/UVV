import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import LeilaoService from "../services/LeilaoService"

class LeilaoController{
    constructor(){}

    async listLeilao(req: Request, res: Response){
        const leilao = await LeilaoService.findLeilao()

        return res.status(200).json({
            status: "OK",
            leilao: leilao,
        })
    }

    async createLeilao(req: Request, res: Response){
        const data: Prisma.LeilaoCreateInput = req.body;
        if(data){
            const newLeilao = LeilaoService.createLeilao(data)
            res.status(200).json({
                status: '20',
                newLeilao: newLeilao
            });
        }else {
            res.status(400).json({
                status: "error",
                mensage: "Missing data"
            });
        }
        res.end('Leilao created')
    }

    async updateLeilao(req: Request, res: Response){
        try{
            //const updateUser = await UserServices.updateUser();
            const leilaoToUpdate = req.params.leilaoId;
            const {produto, preco, dataLimite, donoId} = req.body;

            const leilaoUpdated = await LeilaoService.updateLeilao(leilaoToUpdate, req.body);

            return res.json(leilaoUpdated);   
    }catch(error){
        console.log(error);
    }
}

async deleteLeilao(req: Request, res: Response){
    try{
        const leilaoToDelete = req.params.leilaoId

        const leilaoDeleted = await LeilaoService.deleteLeilao(leilaoToDelete)

        return res.json(leilaoDeleted)
    }catch(error){
        console.log(error);
    }
}

    
}

export default new LeilaoController();