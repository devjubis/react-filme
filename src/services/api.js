import axios from 'axios'; 

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=88c51cf160111d6b6dad15ef5e196f6c&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api; 