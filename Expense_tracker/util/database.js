const sequilize = require('sequelize');
const db= new sequilize('expenses','root','root',{
host: 'localhost',
dialect: 'mysql'
})
module.exports= db;