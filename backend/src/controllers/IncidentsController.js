const connection = require('../database/connection')

module.exports = {

    // listar incidentes
    async index(req, res) {
        const incidents = await connection('incidents').select('*')

        return res.json(incidents)
    },

    // cadastrar incidentes
    async create(req, res) {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json({ id })
    }
}