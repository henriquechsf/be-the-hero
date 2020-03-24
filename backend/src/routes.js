const express = require('express')
const crypto = require('crypto')

// conexao com o banco
const connection = require('./database/connection')

// instancia para usar as rotas
const routes = express.Router()

// rota para listas as Ongs
routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
})

// rota para cadastrar uma nova Ong
routes.post('/ongs', async (req, res) => {
    // desestruturando em variaveis a requisição
    const { name, email, whatsapp, city, uf } = req.body

    // cria um id randomico
    const id = crypto.randomBytes(4).toString('HEX')

    // insere os dados no banco
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    // retorna somente o id para o usuario
    return res.json({ id })
})

module.exports = routes;