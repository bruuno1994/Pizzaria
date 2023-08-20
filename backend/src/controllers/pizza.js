const service = require('../services/Pizza')
const controller = {}

controller.create = async (request, response) => {
    const pizza = await service.create(request.body)
    return response.json(pizza)
}
module.exports = controller