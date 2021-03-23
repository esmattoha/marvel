/*
* Title: "Marvel Movie"
* Description: "Create a server for Movies "
* Author: "Dipu Mondal"
* Date : 20.03.2021
*/

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const movieRoute = require('./routers/movie');

// Create a express function 
const app = express();                                            

// Dependencies difination
app.use(bodyParser.urlencoded({extended:false}));                   
app.use(bodyParser.json());

// DataBase connection
mongoose.connect('mongodb://127.0.0.1:27017/marvel_movie', ()=>{        
    console.log("Conection have been made");
})
.catch(err=>{
    console.log('App starting error: ' , error.stack);
    process.exit(1);
});

// Router define
app.use('/marvel', movieRoute);                                             


// PORT Number , where we run our server
const port = process.env.API_PORT || 3000;
app.listen(port , ()=>{
    console.log(`Api running on port ${port}` );
});