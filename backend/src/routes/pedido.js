var express = require('express')
var pedido = express.Router()

const controller = require('../controllers/pedido')

pedido.post('/', controller.create)
pedido.get('/', controller.list)
pedido.get('/:id', controller.getById)
pedido.delete('/:id', controller.delete)

module.exports = pedido