const express = require('express');
const users = require('../controllers/users');

const routes = express.Router();

routes.post('/user', users.create);

module.exports = routes;
