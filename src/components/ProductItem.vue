<template>
  <div class="d-flex">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text">R$ {{ product.price }}</p>
      <button type="button" class="btn btn-outline-success btn-sm" @click="addCart">
        <i class="fas fa-cart-plus"></i>
      </button>
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
      cart: []
    };
  },
  methods: {
    addCart() {
      this.$root.$data.cart.push(this.product);
    }
  }
};
</script>

<style>
</style>
