import axios from './api';


const isSignIn = () => {
    const _token = localStorage.getItem('_token');
    if (!_token) {
        document.getElementById('').submit();
    }

    return axios.get(`/user`)
        .then();

    return response.data;
}