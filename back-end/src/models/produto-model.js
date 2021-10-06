const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new mongoose.Schema(
    {
        nome: { type: String, required: true},
        marca: { type: String, required: true},
        descricao: { type: String, required: true},
        valor: {type: String, required: true},
        estabelecimento: {
           type: Schema.Types.ObjectId,
           ref: "Estabelecimento"
        }
    }
)

module.exports = mongoose.model('Produto', schema);
