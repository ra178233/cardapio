const express = require('express')
const router = express.Router()
const PedidoService = require('../services/pedido-service.js')
const pedidoService = new PedidoService()
const { check, body, validationResult } = require('express-validator')

router.post('/incluir', [], async(req, res) => {
    let data = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        quantidade: req.body.quantidade,
        produto: req.body.produto,
        estabelecimento: req.body.estabelecimento     
    }   
    let pedido = await pedidoService.save(data)
    res.json(pedido)
})

router.get('/listar', async(req, res) => {
    let pedido = await pedidoService.list()
    res.json(pedido)
})

router.get('/:id', async(req, res) => {
    let id = req.params.id
    let pedido = await pedidoService.Pedido(id)
    res.json(pedido)
})

router.delete('/remover/:id', async(req, res) => {
    let id = req.params.id
    let pedido = await pedidoService.delete(id)
    res.json({ msg: "Pedido removido com sucesso", pedido })
})

router.put('/alterar/:id', async(req, res) => {
    let id = req.params.id
    let data = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        quantidade: req.body.quantidade,
        produto: req.body.produto,
    }
    pedido = await pedidoService.change(id, data)
    res.json({ msg: "Pedido alterado com sucesso", pedido }) 
})

module.exports = router
  