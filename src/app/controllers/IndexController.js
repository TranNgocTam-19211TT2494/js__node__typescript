/**
 * @constructor
 * @controllers
 * @author Tam "name japan takahichi"
 * */ 
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/trending/all/day?api_key=a4999a28333d1147dbac0d104526337a&language=vi-VN&page=1',
  headers: { }
};
const mutipleApiToObject = require('../../util/data');
class IndexController
{
    /**
     * @method GET
     * @void
    */
    index(req, res, next) {
        axios(config)
        .then(response => {
            console.log(JSON.stringify(response.data));
            res.render('index',{ 
                data: mutipleApiToObject(JSON.stringify(response.data))
            })
        })
        .catch(error => next);
    }
}
module.exports = new IndexController;