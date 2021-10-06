require('dotenv').config();

const produtoRoutes = require('./routes/produto-routes.js')
const pedidoRoutes = require('./routes/pedido-routes.js')
const estabelecimentoRoutes = require('./routes/estabelecimento-routes.js')

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const { response } = require('express');


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

app.get("/", (req, res) => { res.send("Cardapio Online") });

app.use('/produto', produtoRoutes)
app.use('/pedido', pedidoRoutes)
app.use('/estabelecimento', estabelecimentoRoutes)


app.listen(port, () => {
    console.log(`APP listening at http://localhost:${port}`)
});