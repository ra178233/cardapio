<template>
  <div class="container">
    {{ estabelecimento.razaoSocial }}
    <br />
    <button @click="verPedidos" type="button" class="btn btn-primary">
      Ver pedidos</button
    ><br />
    <br />
    <button v-on:click="verProdutos" type="submit" class="btn btn-primary">
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
  },
};
</script>   