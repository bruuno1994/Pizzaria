var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();
app.use(cors());

app.listen(8080)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const pedidoRouter = require('./src/routes/pedido')
const pizzaRouter = require('./src/routes/pizza')

app.use('/pedido', pedidoRouter)
app.use('/pizza', pizzaRouter)

module.exports = app;