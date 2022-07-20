const axios = require('axios');

// pass parameters
const api_key = 'a4999a28333d1147dbac0d104526337a';
const domain = 'https://api.themoviedb.org/3';
const language = {
     en: 'en_US',
     vi: 'vi-VN',
}
const page = 1;

// handle function get json
const trending = `${domain}/trending/all/day`;

// Structure function
module.exports = {
    fetchTrending: async function () { //arrays
        try {
            const { data } = await axios.get(`${trending}`, {
                params: {
                    api_key: api_key,
                    language: language.vi,
                    page: page
                }
            });
            const modifiedData = data['results'].map((g) => ({
                name: g['title']
            }));
            console.log(modifiedData);
            return modifiedData;
        } catch (error) { }
    },
    
}