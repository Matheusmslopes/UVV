import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import LanceService from "../services/LanceService"

class LanceController{
    constructor(){}

    async listLance(req: Request, res: Response){
        const lance = await LanceService.findLance()

        return res.status(200).json({
            status: "OK",
            lance: lance,
        })
    }

    async createLance(req: Request, res: Response){
        const data: Prisma.LanceCreateInput = req.body;
        if(data){
            const newLance = LanceService.createLance(data)
            res.status(200).json({
                status: '20',
                newLance: newLance
            });
        }else {
            res.status(400).json({
                status: "error",
                mensage: "Missing data"
            });
        }
        res.end('Lance created')
    }

    async updateLance(req: Request, res: Response){
        try{
            const lanceToUpdate = req.params.lanceId;
            const {produto, preco, dataLimite, donoId} = req.body;

            const lanceUpdated = await LanceService.updateLance(lanceToUpdate, req.body);

            return res.json(lanceUpdated);   
    }catch(error){
        console.log(error);
    }
}

async deleteLance(req: Request, res: Response){
    try{
        const lanceToDelete = req.params.lanceId

        const lanceDeleted = await LanceService.deleteLance(lanceToDelete)

        return res.json(lanceDeleted)
    }catch(error){
        console.log(error);
    }
} 
}

export default new LanceController();