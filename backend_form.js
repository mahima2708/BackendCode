const http = require('http');

const express =  require('express');

const bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
 res.send('<form action="/product" method="POST"> <input type="text" name="title"><br><input type="text" name="size"><button type="submit">Submit</button> </form>');
   
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req, res, next) => {
    console.log('in another middleware here');
    res.send('<h1>hello from express</h1>');
   
});

app.listen(3000);