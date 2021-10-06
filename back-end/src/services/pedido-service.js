const Pedido = require('../models/pedido-model.js')

module.exports = class PedidoService {

    async save(data) {
        return await Pedido(data).save()
    }

    async list() {
        return await Pedido.find({})
    }

    async Pedido(id) {
        return await Pedido.findById(id)
    }

    async listPedidoPorEstabelecimento(id) {
        return await Pedido.find({ estabelecimento: { _id: id } })
    }

    async delete(id) {
        return await Pedido.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await Pedido.findByIdAndUpdate(id, update)
    }
}