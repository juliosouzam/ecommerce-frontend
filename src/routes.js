import Vue from 'vue';
import Router from 'vue-router';
import Home from './templates/Home.vue';
import Product from './templates/Product.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/products',
            name: 'products',
            component: Product
        }
    ]
});