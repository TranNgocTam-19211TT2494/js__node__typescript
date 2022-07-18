const express = require('express');
const express__layout = require('express-ejs-layouts');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');

// Connect lib
const app = express();

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
app.listen(PORT, console.log(`${PORT}`));