import axios from 'axios';

const API_KEY = '4bb1833c51dc23e236182f24b4ce81f6';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentário
*/ 

const getItems = async (endpoint) => {
    const { data } = await axios.get(`${API_BASE}${endpoint}`);
    return data;
}

const getHomeList = async () => [
    {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await getItems(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await getItems(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'toprated',
        title: 'Em Alta',
        items: await getItems(`/movie/top_rated?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'action',
        title: 'Ação',
        items: await getItems(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'comedy',
        title: 'Comédia',
        items: await getItems(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'horros',
        title: 'Terror',
        items: await getItems(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'romance',
        title: 'Romance',
        items: await getItems(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
    },
    {
        slug: 'documentary',
        title: 'Documentários',
        items: await getItems(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
    },

];

const infoRequestType = {
    movie: async (movieId) => await getItems(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`),
    tv: async (movieId) => await getItems(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`),
}

const getMovieInfo = async (movieId, type) => {
    return (movieId && infoRequestType[type])
            ? infoRequestType[type](movieId)
            : {}
}

export default { getHomeList, getMovieInfo }