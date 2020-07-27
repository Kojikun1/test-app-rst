const express = require('express');
const multer = require("multer");

const routes = express.Router();

const multerConfig = require('./config/multer');

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const PostController = require('./controllers/PostController');

const authMiddleware = require('./middlewares/auth');


routes.post('/user/register', UserController.store);
routes.get('/user/list',authMiddleware, UserController.index);

routes.post('/user/session', SessionController.store);

routes.post('/posts',authMiddleware, multer(multerConfig).single('file'),PostController.store);


module.exports = routes;
