import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// CSS
import './assets/semantic-ui/semantic.css';
// import './assets/semantic-ui/semantic.js';

import App from './App.vue';
import Home from './templates/Home.vue';
import Navbar from './components/Navbar.vue';



Vue.component('navbar', Navbar);

const routes = [
  {path: '/home', name: 'home', component: Home},
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})