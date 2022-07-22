/**
 * @route Home
 * @author Tam - takahichi
 * */ 

const express = require('express');
const IController = require('../app/controllers/IndexController');
const route = express.Router();

route.get('/',  IController.index);
route.get('/movie/:ids', IController.detail);

module.exports = route; 