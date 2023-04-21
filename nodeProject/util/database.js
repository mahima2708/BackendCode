const sequilize = require('sequelize');
const database= new sequilize('productslist','root','root',{
host: 'localhost',
dialect: 'mysql'
})
module.exports= database;