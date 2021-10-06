const Estabelecimento = require('../models/estabelecimento-model.js')

module.exports = class EstabelecimentoService {

    async save(data) {
        return await Estabelecimento(data).save()
    }

    async login(email, passaword) {
        return await Estabelecimento.findOne({ 'email': email, 'password': passaword })
    }

    async listar(){
        return await Estabelecimento.find()
    }
    
    async estabelecimento(id){
        return await Estabelecimento.findById(id)
    }
    
    async change(id, update) {
        return await Estabelecimento.findByIdAndUpdate(id, update)
    }
}