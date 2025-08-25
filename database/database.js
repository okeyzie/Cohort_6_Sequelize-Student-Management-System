const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('school_management_system', 'root', 'ChelseaFc', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;