<template>
  <div class="container">
    <br />
    <br />
    <h3>Pedido realizado com sucesso</h3>
    <hr />

    <button v-on:click="voltar" type="submit" class="btn btn-primary">
      Voltar ao cardápio
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$router.push({ path: `/home` });
    },
  },
};
</script>  