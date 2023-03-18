const express= require('express');
const path = require('path');
const route= express.Router();
const succes= require('../controllers/product');

route.get('/',(req, res, next) => {
    console.log('in another middleware here');
    
    res.sendFile(path.join(__dirname,"../","/View","/shop.html"));
   
});
route.post('/success',succes.successful);



module.exports= route;