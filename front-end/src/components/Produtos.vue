<template>
  <div class="container">
    <h1>Cardápio</h1>
    <h3>Escolher Produto</h3>
    <hr />
    <div class="list-group">
      <div
        class="list-group-item"
        v-for="item in produtos"
        v-bind:key="item._id"
      >
        <span
          ><strong>Produto: {{ item.nome }}</strong></span
        ><br />
        <span >Descrição: {{ item.descricao }}</span
        ><br />
        <span >Marca: {{ item.marca }}</span
        ><br />
        <span >Valor: {{ item.valor }}</span>
        <div>
          <a
            href="#"
            title="Comprar"
            v-on:click.prevent="realizarPedido(item._id)"
            >Fazer pedido</a
          >
        </div>
      </div>
      <hr />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    fetch("http://localhost:3000/produto/listar/estabelecimento/" + id)
      .then((response) => response.json())
      .then((data) => (this.produtos = data));
  },
  methods: {
    realizarPedido(id) {
      let estabelecimento = this.$route.params.id;
      this.$router.push({ path: `/pedido/${estabelecimento}/${id}` });
    },
  },
};
</script>