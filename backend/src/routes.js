const express = require('express')
const routes = express.Router()

routes.get('/users', (req, res) => {

    res.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Henrique Souza'
    })
})

module.exports = routes;