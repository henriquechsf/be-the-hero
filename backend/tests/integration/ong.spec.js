const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

// teste de integração
describe('ONG', () => {
    // execute as migrations antes de cada teste para criar as tabelas no banco teste
    // usamos o rollback para excluir todos dados antes de criar novamente
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    // encerra a conexao ao finalizar todos os testes
    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@email.com",
                whatsapp: "4499990000",
                city: "Umuarama",
                uf: "PR"
            })

        // o que é esperado no teste
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})