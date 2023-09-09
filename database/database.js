// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portfolio', '', '', { //  db_name, username , password
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
