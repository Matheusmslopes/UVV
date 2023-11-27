import { PrismaClient } from '@prisma/client'
import UserService from './services/UserService'

const prisma = new PrismaClient()

async function main() {
  await UserService.createUser({email: "matheus@murus", nome: "matheus muruci"});
  //await UserService.createUser({email: "Paulinda@pdc", nome: "paulo said"});
  //await UserService.createUser({email: "jaoluca@oliveira", nome: "jao luca"});
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })