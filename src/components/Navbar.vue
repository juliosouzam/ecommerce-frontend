<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
    <router-link class="navbar-brand" to="/">Loja Virtual</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">SESI</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/home">IEL</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/home">SENAI</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">
            Produtos
            <span class="badge badge-pill badge-light">{{ cartItems }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "./../services/api";

export default {
  props: {
    //
  },
  data() {
    return {
      cartItems: 0
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      axios
        .get(
          "/products/quo-fuga-quaerat-nulla-excepturi-officia-1564054644/getCart"
        )
        .then(response => {
          this.cartItems = response.data.items.length;
        });
    },
    getProducts() {
      //   axios.get()
    }
  }
};
</script>

<style>
</style>
