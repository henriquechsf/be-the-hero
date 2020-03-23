const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Henrique Souza'
    })
})

const PORT = 3333
app.listen(PORT, () => {
    console.log('Executando na porta ' + PORT)
})