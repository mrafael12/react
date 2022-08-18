import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3
// URL DA API: /movie/now_playing?api_key=1143b8cdc60a0cb772408a2d021b88e0&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;