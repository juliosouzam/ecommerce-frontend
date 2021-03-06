import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'toastr';
import Vue from 'vue';
import router from './routes';
import Toasted from 'vue-toasted';
import App from './App.vue';
import Navbar from './components/Navbar.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.use(Toasted, {
  iconPack: 'fontawesome'
})

Vue.component('navbar', Navbar);

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    increment (state, payload) {
      state.cart.push(payload);
    }
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  data() {
    return {
      cart: [],
      item: []
    }
  }
})