import { PrismaClient } from '@prisma/client'
import UserService from './services/UserService'

const prisma = new PrismaClient()

async function main() {
  //await UserService.createUser({email: "matheus murus", nome: "matheus moro"});
  await UserService.createUser({email: "Paulin da pdc", nome: "paulo said"});
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