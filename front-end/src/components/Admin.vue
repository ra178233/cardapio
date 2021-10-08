<template>
  <div class="container">
    <h1>Estabelecimento do {{ estabelecimento.razaoSocial }}</h1>
    <br />
    <button @click="verPedidos" type="submit" class="btn btn-primary">
      Ver pedidos</button
    ><br />
    <br />
    <button @click="verProdutos" type="submit" class="btn btn-primary">
      Ver produtos
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estabelecimento: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    fetch("http://localhost:3000/estabelecimento/" + id)
      .then((response) => response.json())
      .then((data) => (this.estabelecimento = data));
  },
  methods: {
    verPedidos() {
      let id = this.$route.params.id;
      this.$router.push({ path: `/verPedidos/${id}` });
    },
    verProdutos() {
      let id = this.$route.params.id;
      this.$router.push({ path: `/verProdutos/${id}` });
    },
  },
};
</script>