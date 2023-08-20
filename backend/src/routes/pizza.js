var express = require('express')
var pizza = express.Router()

const controller = require('../controllers/pizza')

pizza.post('/', controller.create)

module.exports = pizza