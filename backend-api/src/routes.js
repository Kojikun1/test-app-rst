const express = require('express');

const routes = express.Router();

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

const authMiddleware = require('./middlewares/auth');


routes.post('/user/register', UserController.store);
routes.get('/user/list',authMiddleware, UserController.index);

routes.post('/user/session', SessionController.store);


module.exports = routes;
