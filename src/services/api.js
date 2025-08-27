import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=4be5a1aa1829c98e1eefaec08fa5313a&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;