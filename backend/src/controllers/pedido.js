const service = require('../services/Pedido')
const controller = {}

controller.create = async (request, response) => {
    const pedido = await service.create(request.body)
    return response.json(pedido)
}

controller.list = async(req, res) => {
    const pedido = await service.list()
    return res.json(pedido)
}

controller.getById = async(req, res) => {
    const {id} = req.params
    const pedido = await service.getById(Number(id))

    return res.json(pedido)
}

controller.delete = async(req, res) => {
    const {id} = req.params
    await service.delete(Number(id))
    return res.json("Pedido deletado com sucesso!")
}

module.exports = controller