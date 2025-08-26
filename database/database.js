const {Sequelize} = require('sequelize')

require('dotenv').config();

const DB = process.env.SQL_DATABASE;
const username = process.env.SQL_USERNAME;
const password = process.env.SQL_PASSWORD;
const host = process.env.SQL_HOST;
const dialect = process.env.SQL_DIALECT;

const sequelize = new Sequelize(DB, username, password, {
  host: host,
  dialect: dialect
});

module.exports = sequelize;