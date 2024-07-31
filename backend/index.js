const express = require('express');
const dotenv = require('dotenv');
const router = require('./routers.js');
// const cors = require('cors');
const app = express()

// app.use(cors({
//     origin: 'http://localhost:4200' // Allow requests from your frontend
//   }));

  
//   const port = 8080;
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });

app.listen(8080, ()=> {
    console.log("connected to backend");
});

app.use('/', router)