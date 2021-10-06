<template>
  <div class="container">
    <h1>Estabelecimetos</h1>
    <hr />
    <div class="list-group">
      <div
        class="list-group-item"
        v-for="item in estabelecimentos"
        v-bind:key="item._id"
      >
        <span
          ><strong>Estabelecimento do {{ item.razaoSocial }}</strong></span
        ><br />
        <span>Telefone: {{ item.telefone }}</span>
        <p>e-mail: {{ item.email }}</p>
        <div>
          <a
            href="#"
            title="Ver cardapio"
            v-on:click.prevent="verProdutos(item._id)"
            >Ver cardapio</a
          >
        </div>
      </div>
      <hr />
    </div>
    <hr />
    <a href="#" title="Admin" v-on:click.prevent="navegarParaLogin()">Admin</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estabelecimentos: null,
    };
  },
  created() {
    fetch("http://localhost:3000/estabelecimento/listar")
      .then((response) => response.json())
      .then((data) => (this.estabelecimentos = data));
  },
  methods: {
    verProdutos(id) {
      this.$router.push({ path: `/estabelecimento/${id}` });
    },
    navegarParaLogin() {
      this.$router.push({ path: `/login` });
    },
  },
};
</script>