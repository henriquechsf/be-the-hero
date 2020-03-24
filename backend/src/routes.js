const express = require('express')
const OngController = require('./controllers/OngController')

// instancia para usar as rotas
const routes = express.Router()

// rota para listas as Ongs
routes.get('/ongs', OngController.index)

// rota para cadastrar uma nova Ong
routes.post('/ongs', OngController.create)

module.exports = routes;