<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-4 d-flex align-items-stretch mt-4" v-for="product in products" :key="product.id">
        <div class="card">
          <ProductItem :product="product"></ProductItem>
        </div>
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
