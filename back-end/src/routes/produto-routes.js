const express = require('express')
const router = express.Router()
const ProdutoService = require('../services/produto-service.js')
const produtoService = new ProdutoService()

router.post('/incluir', [], async(req, res) => {
    let data = {
        nome: req.body.nome,
        marca: req.body.marca,
        descricao: req.body.descricao,
        valor: req.body.valor,
        estabelecimento: req.body.estabelecimento
    }   
    let produto = await produtoService.save(data)
    res.json(produto)
})

router.get('/listar', async(req, res) => {
    let produtos = await produtoService.list()
    res.json(produtos)
})

router.get('/listar/estabelecimento/:id', async(req, res) => {
    let id = req.params.id
    let produtos = await produtoService.listProdutoPorEstabelecimento(id)
    res.json(produtos)
})

router.get('/:id', async(req, res) => {
    let id = req.params.id
    let produtos = await produtoService.produtoId(id)
    res.json(produtos)
})

router.delete('/remover/:id', async(req, res) => {
    let id = req.params.id
    let produtos = await produtoService.delete(id)
    res.json({ msg: "Produto deletado com sucesso", produtos })
})

router.put('/alterar/:id', async(req, res) => {
    let id = req.params.id
    let data = {
        nome: req.body.nome,
        marca: req.body.marca,
        descricao: req.body.descricao,
        valor: req.body.valor,
    }
    produtos = await produtoService.change(id, data)
    res.json({ msg: "Produto alterado com sucesso", produtos})
})

module.exports = router
  