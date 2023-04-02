const path = require('path');
const express = require('express');
const route = require('./routes/adminroute');
const entry = require('./models/user');

const bodyParser = require('body-parser');
var cors= require('cors');

const app =express();
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/',route);



// app.post('/', async (req,res,next)=>{
//    try{
//     const nAme = req.body.name;
//     const mail = req.body.email;
//     const contact_number = req.body.phnumber;
//     console.log("+++++++",nAme);
//     const newData = await entry.create({nAme:nAme,mail:mail,contact_number:contact_number});
//     res.status(201).json({newuserDetail: data});
//    } catch(err){
//     res.status(500).json({
//         error: err
//     })
//    }
// })
// app.get('/', async (req,res,next)=>{
//     const users = await entry.findAll();
//     res.status(200).json({allUsers: users});
// })

app.set('views','view');
app.set('view engine','html');


app.use('/',route);

app.listen(4000);
