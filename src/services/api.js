import axios from 'axios';

const _token = localStorage.getItem('_token');

if (_token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`;
}

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});