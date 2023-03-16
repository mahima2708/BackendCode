const http = require('http');

const express =  require('express');

const bodyParser= require('body-parser');

const app = express();
const adminRoutes= require('./router/admin');
const adroute= require('./router/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use('/shop',adroute);

app.use('/',(req,res,next)=>{
res.status(404).send('<h1>Page Not found</h1>')
});



app.listen(3000);