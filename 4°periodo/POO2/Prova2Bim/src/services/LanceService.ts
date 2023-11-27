import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceService {
    constructor() { }

    async createLance(lance: Prisma.LanceCreateInput) {
        try {
            const newLance = await prisma.lance.create({
                data: lance
            });
            return newLance;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findLance(lanceId?: string) {
        try {
            if (lanceId) {
                const lance = await prisma.lance.findUnique({
                    where: {
                        lanceId
                    }
                })
                return lance;
            }
            else {
                const lances = await prisma.lance.findMany();
                return lances;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateLance(lanceId: string, newData: Prisma.LanceUpdateInput){
        try{
            const lanceUpdated = await prisma.lance.update({
                where : {
                    lanceId
                },
                data: newData
            });
            return lanceUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    //Matheus Muruci

    async deleteLance(lanceId: string){
        try{
            if(!lanceId){
                return console.log("ID não é opicional.");
            }
            await prisma.lance.delete({where: {lanceId}});
            return "Ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();