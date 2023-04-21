const sequelize = require('sequelize');
const dataBase = require('../util/database');
const enteries = dataBase.define('productlist',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    product:sequelize.STRING,
    amount:sequelize.INTEGER,
});
module.exports= enteries;