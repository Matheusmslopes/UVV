import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LeilaoService {
    constructor() { }

    async createLeilao(leilao: Prisma.LeilaoCreateInput) {
        try {
            const newLeilao = await prisma.leilao.create({
                data: leilao
            });
            return newLeilao;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findLeilao(leilaoId?: string) {
        try {
            if (leilaoId) {
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        leilaoId
                    }
                })
                return leilao;
            }
            else {
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateLeilao(leilaoId: string, newData: Prisma.LeilaoUpdateInput){
        try{
            const leilaoUpdated = await prisma.leilao.update({
                where : {
                    leilaoId
                },
                data: newData
            });
            return leilaoUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(leilaoId: string){
        try{
            if(!leilaoId){
                return console.log("ID is not optional.");
            }
            await prisma.leilao.delete({where: {leilaoId}});
            return "Ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();