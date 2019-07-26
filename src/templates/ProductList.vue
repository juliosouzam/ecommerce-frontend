<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="card" v-for="product in products" :key="product.id">
        <ProductItem :product="product"></ProductItem>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./../components/ProductItem";
export default {
  components: {
    ProductItem
  },
  props: {
    products: Array
  }
};
</script>

<style>
</style>
