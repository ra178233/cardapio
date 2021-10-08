<template>
  <div class="container">
    <h1>Lista de produtos</h1>
    <hr />
    <div class="list-group">
      <div
        class="list-group-item"
        v-for="item in produtos"
        v-bind:key="item._id"
      >
        <span
          ><strong>Nome do produto: {{ item.nome }}</strong></span
        ><br />
        <span>Marca: {{ item.marca }}</span
        ><br />
        <span>Descrição: {{ item.descricao }}</span
        ><br />
        <span>Valor: {{ item.valor }}</span>
        <br />
        <span>Estabelecimento: {{ item.estabelecimento }}</span>
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
};
</script>
