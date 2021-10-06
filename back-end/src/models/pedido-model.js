const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    estabelecimento: {
        type: Schema.Types.ObjectId,
        ref: "Estabelecimento"
    },
    produto: {
        type: Schema.Types.ObjectId,
        ref: "Produto"
    },
    quantidade: {type: Number, require: true},
    nome: { type: String,require: true },
    endereco: { type: String, require: true }
})

module.exports = mongoose.model('Pedido', schema);