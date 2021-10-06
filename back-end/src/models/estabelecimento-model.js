const mongoose = require('mongoose');
const produtos = require('./produto-model.js')

const schema = new mongoose.Schema(
    {
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        cnpj: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        telefone: { type: String, required: true },
        produtos: [produtos.schema]
    }
)

module.exports = mongoose.model('Estabelecimento', schema);