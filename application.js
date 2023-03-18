const express = require('express');
const path= require('path');
const con_root = express();

const shop = require('./router/shop.js');
const product = require('./router/product.js');
con_root.use(express.static(path.join(__dirname,"public")))
con_root.use(product);

con_root.use(shop);
const error= require('./controllers/error');
con_root.use(error.pageError);

con_root.listen(4000);