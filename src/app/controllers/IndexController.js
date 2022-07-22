/**
 * @controllers
 * @author Tam "name japan takahichi"
 * */
const { 
    fetch_now_playing, 
    fetch_discover_movie, 
    fetch_top_rated,
    fetch_movie_detail,
    fetch_movie_similar,
    fetch_language 
} = require('../../data/json');

// const { arrayToObject } = require('../../util/data');

class IndexController
{
    /**
     * @method GET
     * @void
    */
    async index(req, res) {
        const lang = await fetch_language();
        const now_playing = await fetch_now_playing('vi-VN');
        const discover = await fetch_discover_movie('vi-VN');
        const rating = await fetch_top_rated();
        try {
            res.render('index', {
                response: now_playing[0],
                movies: discover, // use forEach in engine template
                reviews: rating,
                languages: lang
            });
            
        } catch (error) {
            console.log(error);
        }
        
    }
    


    async detail(req, res) {
        const lang = await fetch_language();
        const movie = await fetch_movie_detail(req.params.ids );
        const similar = await fetch_movie_similar(req.params.ids );
        try {
            res.render('detail__html', {
                movie: movie,
                similars: similar,
                languages: lang
            });
            console.log(similar);
        } catch (error) { console.log(error); }
    }
}
module.exports = new IndexController;