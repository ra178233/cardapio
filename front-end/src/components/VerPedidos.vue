<template>
  <div class="container">
    <h1>Lista de pedidos</h1>
    <hr />
    <div class="list-group">
      <div
        class="list-group-item"
        v-for="item in pedidos"
        v-bind:key="item._id"
      >
        <span
          ><strong>Nome do cliente: {{ item.nome }}</strong></span
        ><br />
        <span>Endereço: {{ item.endereco }}</span
        ><br />
        <span>Quantidade: {{ item.quantidade }}</span
        ><br />
        <span>Produto: {{ item.produto }}</span
        ><br />
        <div>
          <button v-on:click="remover" type="submit" class="btn btn-primary">
            Excluir
          </button><br><p/>
          <button v-on:click="alterar" type="submit" class="btn btn-primary">
            Alterar
          </button>
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
      pedidos: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    fetch("http://localhost:3000/pedido/listar/estabelecimento/" + id)
      .then((response) => response.json())
      .then((data) => (this.pedidos = data));
  },
};
</script>