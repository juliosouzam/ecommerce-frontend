<template>
  <section>
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-5 text-center">
          <img class="img-thumbnail" :src="`${product.images[0].path}`" :alt="`${product.title}`" :title="`${product.title}`"/>
        </div>
        <div class="col-7">
            <p>
                <b>Título:</b>
            </p>
            <p>{{ product.title }}</p>
            <p>
                <b>Descrição:</b>
            </p>
            <p>{{ product.description }}</p>
            <p>
                <b>Preço:</b>
            </p>
            <p>R$ {{ product.price }}</p>
            <button type="button" class="btn btn-outline-info btn-block">Add to Cart</button>
            <button type="button" class="btn btn-outline-success btn-block">Buy</button>
        </div>
        <div class="col-12">
            
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "./../services/api";

export default {
  data() {
    return {
      category: this.$route.params.category,
      subcategory: this.$route.params.subcategory,
      slug: this.$route.params.product,
      product: {}
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get(
          `/categories/${this.category}/subcategories/${this.subcategory}/products/${this.slug}`
        )
        .then(response => {
          this.product = response.data.product;
        });
    }
  }
};
</script>

<style>
</style>
