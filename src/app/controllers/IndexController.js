/**
 * @controllers
 * @author Tam "name japan takahichi"
 * */ 
const { fetchTrending } = require('../../data/json');
const { multipleApiToObject } = require('../../util/data');
class IndexController
{
    /**
     * @method GET
     * @void
    */
    index(req, res, next) {
        const trending = fetchTrending();
        try {
            res.render('index', {
                response: trending,
                movies: trending
            });
            console.log(trending);
            
        } catch (error) {
            console.log(error);
        }
        
    }
    
}
module.exports = new IndexController;