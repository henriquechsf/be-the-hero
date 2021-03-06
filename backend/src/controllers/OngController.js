const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {

    // listar Ongs
    async index(req, res) {
        const ongs = await connection('ongs').select('*')

        return res.json(ongs)
    },

    // cadastro de Ongs
    async create(req, res) {
        // desestruturando em variaveis a requisição
        const { name, email, whatsapp, city, uf } = req.body

        // cria um id randomico
        const id = generateUniqueId()

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
    }

}