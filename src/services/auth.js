import axios from './api';
import VueRouter from 'vue-router';


const isSignIn = async () => {
    const response = await axios.get(`/user`);

    return response.data;
}