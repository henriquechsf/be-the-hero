const knex = require('knex')
const configuration = require('../../knexfile')

// variável de ambiente usando lib cross-env
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(config)

module.exports = connection