/**
 * @use view engine interface
 * */ 
const Route__home = require('./index');

function route(app) 
{
    app.use('/', Route__home);
}
module.exports = route;