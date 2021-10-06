const Produto = require('../models/produto-model.js')

module.exports = class ProdutoService {
  
    async save(data) {
        return await Produto(data).save()
    }

    async listProdutoPorEstabelecimento(id) {
        return await Produto.find({ estabelecimento: { _id: id } })
    }

    async list() {
        return await Produto.find()
    }
    
    async produtoId(id) {
        return await Produto.findById(id)
    }

    async delete(id) {
        return await Produto.findByIdAndDelete(id)
    }

    async change(id, update) {
        return await Produto.findByIdAndUpdate(id, update)
    }
}