<template>
  <div class="container">
    <h1>Login</h1>
    <hr />
    <div class="form-todo form-group">
      <p>
        <input
          placeholder="email"
          type="text"
          name="author"
          class="form-control"
          v-model="email"
        />
      </p>
      <p>
        <input
          placeholder="password"
          type="password"
          name="message"
          class="form-control"
          v-model="password"
        />
      </p>
      <button v-on:click="login" type="submit" class="btn btn-primary">
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      usuario: null,
    };
  },
  methods: {
    login() {
      fetch("http://localhost:3000/estabelecimento/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
      })
        .then((response) => response.json())
        .then((data) => (this.usuario = data));

      if (this.usuario != null) {
        this.$router.push({ path: `/admin/${this.usuario._id}` });
      }
    },
  },
};
</script>