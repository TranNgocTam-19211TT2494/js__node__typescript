const axios = require('axios');

// pass parameters
const api_key = 'a4999a28333d1147dbac0d104526337a';
const domain = 'https://api.themoviedb.org/3';
const language = {
    vi: 'vi-VN',
    en: 'en-US'
};
const page = 1;

// handle function get json
const now_playing = `${domain}/movie/now_playing`;
const upcoming = `${domain}/discover/movie`;
const top_rated =  `${domain}/movie/top_rated`;
const movie = `${domain}/movie`;
const languages = `${domain}/configuration/languages`;

// Structure function
module.exports = {
    /**
     * @function get language list
     * */
    fetch_language: async function () {
        try {
            const { data } = await axios.get(languages, {
                params: {
                    api_key: api_key,
                }
            });
            return data;
        } catch (error) { console.log(error); }
    },
    
    /**
     * New movie list function
     * */ 
    fetch_now_playing: async function (lang) { //arrays
        try {
            const { data } = await axios.get(now_playing, {
                params: {
                    api_key: api_key,
                    language: lang,
                    region: 'VN',
                    page: page
                }
            });
            const domain__image = 'https://image.tmdb.org/t/p/original/';
            const modifiedData = data['results'].map((m) => ({
                uid: m['id'],
                tvId: m['tv_id'] ? m['tv_id'] : '',
                backdrop_path:  m['backdrop_path'],
                popularity: m['popularity'],
                title: m['title'],
                name: m['name'],
                poster_path: domain__image + m['poster_path'],
                overview: m['overview'],
                rating: m['vote_average'],
            }));
            return modifiedData;
        } catch (error) { }
    },

    /*---------------------Processing function to get the list of TV in Vietnam-----------------------*/
    fetch_discover_movie: async function (lang) {
        try {
            const { data } = await axios.get(upcoming, {
                params: {
                    api_key: api_key,
                    language: lang,
                    with_original_language: 'vi',
                    page: page
                }
            });
            const domain__image = 'https://image.tmdb.org/t/p/original/';
            const modifiedData = data['results'].map((m) => ({
                uid: m['id'],
                tvId: m['tv_id'] ? m['tv_id'] : '',
                backdrop_path:  m['backdrop_path'],
                popularity: m['popularity'],
                title: m['title'] ? m['title'] : m['name'],
                poster_path: domain__image + m['poster_path'],
                overview: m['overview'],
                rating: m['vote_average'],
            }));
            return modifiedData;
        } catch (error) { }
    },

    /**
     * The function to get the list of movies with the highest rating
     * */
    fetch_top_rated: async function () {
        try {
            const { data } = await axios.get(top_rated, {
                params: {
                    api_key: api_key,
                    language: language.vi,
                    region: 'VN',
                    page: page
                }
            });
            const domain__image = 'https://image.tmdb.org/t/p/original/';
            const modifiedData = data['results'].map((m) => ({
                uid: m['id'],
                tvId: m['tv_id'] ? m['tv_id'] : '',
                backdrop_path:  m['backdrop_path'],
                popularity: m['popularity'],
                title: m['title'] ? m['title'] : m['name'],
                poster_path: domain__image + m['poster_path'],
                overview: m['overview'],
                rating: m['vote_average'],
            }));
            return modifiedData;
        } catch (error) {}
    }, 

    /**
     * Movie detail retrieval function
     * */
    fetch_movie_detail: async function (ids) {
        try {
            const { data } = await axios.get(`${movie}/${ids}`, {
                params: {
                    api_key: api_key,
                    language: 'vi-VN'
                }
            });
            return data;
        } catch (error) { }
    }, 
    fetch_movie_similar: async function (ids) {
        try {
            const { data } = await axios.get(`${movie}/${ids}/similar`, {
                params: {
                    api_key: api_key,
                    language: 'vi-VN'
                }
            });
            const domain__image = 'https://image.tmdb.org/t/p/original/';
            const modifiedData = data['results'].map((m) => ({
                uid: m['id'],
                tvId: m['tv_id'] ? m['tv_id'] : '',
                backdrop_path:  m['backdrop_path'],
                popularity: m['popularity'],
                title: m['title'] ? m['title'] : m['name'],
                poster_path: domain__image + m['poster_path'],
                overview: m['overview'],
                rating: m['vote_average'],
            }));
            return modifiedData;
        } catch (error) { }
    }

}