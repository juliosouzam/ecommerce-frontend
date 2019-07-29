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
        <li class="nav-item" v-for="category in categories" :key="category.id">
          <router-link class="nav-link" :to="`/${category.slug}`">{{ category.name }}</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">
            Carrinho
            <span class="badge badge-pill badge-secondary">{{ cartItems }}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" id="anchorModal" class="nav-link" data-toggle="modal" data-target="#authModal">
            <i class="fas fa-user"></i>
          </a>
          <AuthModal></AuthModal>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "./../services/api";
import AuthModal from './../components/AuthModal';

export default {
  components: {
    AuthModal
  },
  data() {
    return {
      cartItems: 0,
      categories: []
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios.get(`/categories`).then(response => {
        this.categories = response.data.categories;
      });
    }
  }
};
</script>

<style>
</style>
