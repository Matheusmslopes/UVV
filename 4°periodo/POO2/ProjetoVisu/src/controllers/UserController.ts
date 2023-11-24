import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import UserService from "../services/UserService";

class UserController{
    constructor(){}

    async listUsers(req: Request, res: Response){
        const users = await UserService.findUsers() as Prisma.UsuarioCreateInput[];

        const filteredUsers = users.filter((user: Prisma.UsuarioCreateInput) => user.email != null)

        res.render("home", {users: filteredUsers});

        /*return res.status(200).json({
            status: "OK",
            users: filteredUsers,
        })*/
    }

    async createUser(req: Request, res: Response){
        const data: Prisma.UsuarioCreateInput = req.body;
        if(data){
            const newuser = UserService.createUser(data);
            res.status(200).json({
                status: '20',
                newuser: newuser
            });
        }else {
            res.status(400).json({
                status: "ERROR",
                mensage: "Missing data"
            });
        }
        res.end('User created')
    }

    async updateUser(req: Request, res: Response){
        try{
            const userToUpdate = req.params.usuarioId;
            const {nome, email} = req.body;

            const userUpdated = await UserService.updateUser(userToUpdate, req.body);

            return res.json(userUpdated);   
    }catch(error){
        console.log(error);
    }
}

async deleteUser(req: Request, res: Response){
    try{
        const userToDelete = req.params.usuarioId

        const userDeleted = await UserService.deleteUser(userToDelete)

        return res.json(userDeleted)
    }catch(error){
        console.log(error);
    }
}
}

export default new UserController();