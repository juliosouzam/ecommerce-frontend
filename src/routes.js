import Vue from 'vue';
import Router from 'vue-router';
import Home from './templates/Home.vue';
import Product from './templates/Product.vue';
import ProductShow from './templates/ProductShow.vue';

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
            path: '/:category',
            name: 'categories',
            component: Product
        },
        {
            path: '/:category/:subcategory',
            name: 'subcategories',
            component: Product
        },
        {
            path: '/:category/:subcategory/:product',
            name: 'product',
            component: ProductShow
        }
    ],
    linkActiveClass: "active"
});