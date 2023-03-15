const http = require('http');

const express =  require('express');

const apps = express();

apps.use((req, res, next) => {
    console.log('in th emiddleware here');
    next();
});

apps.use((req, res, next) => {
    console.log('in another middleware here');
    res.send('<h1>hello from express</h1>');
   
});

apps.listen(3000);