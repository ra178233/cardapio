<template>
  <div class="container">
    <h1>Pedido</h1>
    <hr />
    <div class="list-group">
      <div class="list-group-item">
        <strong>Produto:</strong> {{ produto.nome }}<br />
        <strong>Descrição:</strong> {{ produto.descricao }}<br />
        <strong>Valor:</strong> {{ produto.valor }}<br />
      </div>
    </div>
    <br />
    <div class="form-todo form-group">
      <p>
        <input
          placeholder="nome"
          type="text"
          name="author"
          class="form-control"
          v-model="nome"
        />
      </p>
      <p>
        <input
          placeholder="Endereço"
          name="Endereço"
          class="form-control"
          v-model="endereco"
        />
      </p>
      <p>
        <input
          placeholder="Quantidade"
          name="Quantidade"
          class="form-control"
          v-model="quantidade"
          type="number"
        />
      </p>
      <button v-on:click="realizarPedido" type="submit" class="btn btn-primary">
        Realizar Pedido
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      produto: null,
      nome: "",
      endereco: "",
      quantidade: 0,
    };
  },
  created() {
    let id = this.$route.params.produto;
    fetch("http://localhost:3000/produto/" + id)
      .then((response) => response.json())
      .then((data) => (this.produto = data));
  },
  methods: {
    realizarPedido() {
      let produto = this.$route.params.produto;
      let estabelecimento = this.$route.params.estabelecimento;
      fetch("http://localhost:3000/pedido/incluir", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: this.nome,
          endereco: this.endereco,
          quantidade: this.quantidade,
          produto: produto,
          estabelecimento: estabelecimento,
        }),
      }).then((response) => response.json());
      this.$router.push({ path: `/pedidoRealizado` });
    },
  },
};
</script>  