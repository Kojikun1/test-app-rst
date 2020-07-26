const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();

const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, ()=> {
    console.log("listen on PORT 3333");
})

