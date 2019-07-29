<template>
  <div class="card-body">
    <h5 class="card-title">
      <router-link :to="`/${category}/${subcategory}/${product.slug}`">{{ product.title }}</router-link>
    </h5>
    <p class="card-text">{{ product.description }}</p>
    <p class="card-text">R$ {{ product.price }}</p>
    <div class="card-footer">
      <div class="d-flex justify-content-between">
        <router-link class="btn btn-outline-info btn-sm" :to="`/${category}/${subcategory}/${product.slug}`">
          <i class="fas fa-eye"></i>
        </router-link>
        <button type="button" class="btn btn-outline-success btn-sm" @click="addCart">
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      category: this.$route.params.category,
      subcategory: this.$route.params.subcategory
    };
  },
  methods: {
    addCart() {
      const _token = localStorage.getItem("_token");
      if (!_token) {
        document.getElementById("anchorModal").click();
      }
    }
  }
};
</script>

<style>
</style>
