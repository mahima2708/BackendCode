const express = require('express');
const router = express.Router();
const path= require('path');
const getProduct= require('../controllers/product');

router.get('/add-product',getProduct.getAddProduct);
   

router.post('/contact-Us',getProduct.postAddProduct);



  module.exports= router;