/**
 * Bibioteca Celebrate -> valida os dados enviados via QUERY, ROUTE, BODY, HEADERS
 */

const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// instancia para usar as rotas
const routes = express.Router()

// rotas para criar a sessao de login
routes.post('/session', SessionController.create)

// rota para listas as Ongs
routes.get('/ongs', OngController.index)

// rota para cadastrar uma nova Ong - tem validação com Joi Celebrate
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create)

// rota para listar os casos por Ongs
// no caso de headers a validação não usa keys e sim unknown no final
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index)

// rota para listar os casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index)

// rota para cadastrar um novo caso
// IMPLEMENTAR VALIDAÇÃO AQUI...
routes.post('/incidents', IncidentsController.create)

// rota para deletar caso
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete)


module.exports = routes;