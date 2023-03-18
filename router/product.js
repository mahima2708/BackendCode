const express = require('express');
const router = express.Router();
const path= require('path');

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,"../","/View","/product.html"));
      
});
   

router.post('/contact-Us',(req,res,next)=>{
    console.log("bjhfhjs");
       res.sendFile(path.join(__dirname,"../","/View","/contactUs.html"));
   });



  module.exports= router;