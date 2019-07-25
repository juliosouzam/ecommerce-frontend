<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }}
                <a @click="addToCart(product)">Add to Cart</a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from './../services/api';

export default {
    props: {
        subcategory: {
            type: String
        }
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            axios.get();
        },
        addToCart(product) {
            axios.post(`/products/${product.slug}/addToCart`);
        }
    }
}
</script>

