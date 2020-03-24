const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')

// instancia para usar as rotas
const routes = express.Router()

// rota para listas as Ongs
routes.get('/ongs', OngController.index)
// rota para cadastrar uma nova Ong
routes.post('/ongs', OngController.create)

// rota para listar os casos por Ongs
routes.get('/profile', ProfileController.index)

// rota para listar os casos
routes.get('/incidents', IncidentsController.index)
// rota para cadastrar um novo caso
routes.post('/incidents', IncidentsController.create)
// rota para deletar caso
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes;