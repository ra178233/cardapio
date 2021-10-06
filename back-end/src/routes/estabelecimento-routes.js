const express = require('express')
const router = express.Router()
const EstabelecimentoService = require('../services/estabelecimento-service.js')
const estabelecimentoService = new EstabelecimentoService()

router.post('/incluir', async (req, res) => {
    let data = {
        razaoSocial: req.body.razaoSocial,
        nomeFantasia: req.body.nomeFantasia,
        cnpj: req.body.cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        password: req.body.password
    }
    let newEstabelecimento = await estabelecimentoService.save(data)
    res.json(newEstabelecimento)
})

router.post('/login', async (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password
    }
    let estabelecimento = await estabelecimentoService.login(data.email, data.password)
    res.json(estabelecimento)
})

router.get('/listar', async (req, res) => {
    let estabelecimentos = await estabelecimentoService.listar()
    res.json(estabelecimentos)
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let estabelecimentos = await estabelecimentoService.estabelecimento(id)
    res.json(estabelecimentos)
})

router.put('/alterar/:id', async (req, res) => {
    let id = req.params.id
    let data = {
        razaoSocial: req.body.razaoSocial,
        nomeFantasia: req.body.nomeFantasia,
        cnpj: req.body.cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        password: req.body.password,
    }
    let estabelecimentos = await estabelecimentoService.change(id, data)
    res.json({ msg: "Estabelecimento alterado com sucesso", estabelecimentos })
})

module.exports = router