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
const routes = require('./routes')

const app = express()

// receber body da requisição em formato json
app.use(express.json())
app.use(routes)


const PORT = 3333
app.listen(PORT, () => {
    console.log('Executando na porta ' + PORT)
})