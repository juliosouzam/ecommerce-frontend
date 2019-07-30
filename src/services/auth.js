import axios from './api';
import VueRouter from 'vue-router';


const isSignIn = async () => {
    const _token = localStorage.getItem('_token');
    if (!_token) {
        
    }

    const response = await axios.get(`/user`);

    return response.data;
}