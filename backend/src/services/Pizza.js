const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient
const service = {}

service.create = async (data) => {
    return await prisma.pizza.create({data})
}
module.exports = service