<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 mt-4">
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="subcategory in subcategories" :key="subcategory.id">
                <router-link :to="`/${category}/${subcategory.slug}`">{{ subcategory.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-8" v-if="subcategory">
        <ProductList :products="products"></ProductList>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./../services/api";
import ProductList from "./ProductList";

export default {
  components: {
    ProductList
  },
  data() {
    return {
      category: this.$route.params.category,
      subcategory: "",
      subcategories: [],
      products: []
    };
  },
  watch: {
    $route(to, from) {
      this.category = to.params.category;
      this.getSubcategories();

      if (to.params.subcategory) {
        this.subcategory = to.params.subcategory || from.params.subcategory;
        this.getProductList();
      }
    }
  },
  mounted() {
    this.getSubcategories();
  },
  methods: {
    getSubcategories() {
      axios.get(`/categories/${this.category}/subcategories`)
        .then(response => {
          this.subcategories = response.data.subcategories;
          this.products = response.data.subcategories.products;
        });
    },
    getProductList() {
      axios.get(`/categories/${this.category}/subcategories/${this.subcategory}/products`)
        .then(response => {
          this.products = response.data.products;
        });
    }
  }
};
</script>

<style>
</style>
