const express= require('express');
const route= express.Router();

route.get('/home',(req, res, next) => {
    console.log('in another middleware here');
    res.send('<h1>hello from express</h1>');
   
});



module.exports= route;