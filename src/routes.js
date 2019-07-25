import Vue from 'vue';
import Router from 'vue-router';
import Home from './templates/Home.vue';

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
        }
    ]
});