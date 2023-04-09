const express = require('express');
const app = express();
const path = require('path');
const file = require('./routes/adminrouter');
app.use(express.static(path.join(__dirname,'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors= require('cors');

app.use('/',file);

app.set('views','view');
app.set('view engine','html');
app.use(cors());

app.listen(3000);