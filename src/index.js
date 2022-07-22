const express = require('express');
const express__layout = require('express-ejs-layouts');
const express__session = require('express-session');
const path = require('path');
const morgan = require('morgan');


// Connect lib
const app = express();

// Save session.
app.use(express__session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }
}));

// Router middleware
const route = require('./routes/app');

// Handle template engines node modules
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express__layout);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.urlencoded({ extended: true }));

route(app);

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('listening at http://%s:%s', host, port);
});