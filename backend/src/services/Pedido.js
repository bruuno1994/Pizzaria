const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient
const service = {}

service.create = async (data) => {
    return await prisma.pedido.create({data})
}

service.list = async () => {
    return await prisma.pedido.findMany()
}

service.getById = async (id) => {
    return await prisma.pedido.findUnique({
        where: {id: id}
    })
}

service.delete = async (id) => {
    return await prisma.pedido.delete({
        where : {id: id}
    })
}

module.exports = service