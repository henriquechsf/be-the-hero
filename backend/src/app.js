/**
 * Rota / Recurso
 */

/**
 * Metódos HTTP:
 * 
 * GET: Buscar informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: parametros nomeados enviados na rotas após ? (filtros, paginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisição utilizado para criar ou alterar resursos
 */

const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

// habilirar a API para outras aplicações
app.use(cors())
// receber body da requisição em formato json
app.use(express.json())
app.use(routes)
// tratamento erros de validação
app.use(errors())

// app.listen movido para server.js - motivo testes
module.exports = app;