const sequelize = require('sequelize');
const dataBase = require('../util/database');
const entry = dataBase.define('expenselist',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    monthval:sequelize.STRING,
    payment:sequelize.STRING,
    category:sequelize.STRING,
    product:sequelize.STRING,
    amount:sequelize.INTEGER,
});
module.exports= entry;
