const express = require('express');
const dotenv = require('dotenv');
const router = require('./routers.js');
const app = express()

app.listen(8800, ()=> {
    console.log("connected to backend");
});

app.use('/', router)