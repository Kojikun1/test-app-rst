const express = require('express');

const routes = express.Router();

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");


routes.post('/user/register', UserController.store);
routes.get('/user/list', UserController.index);

routes.post('/session', SessionController.store);


module.exports = routes;
