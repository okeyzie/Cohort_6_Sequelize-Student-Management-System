const { Sequelize, DataTypes, Model, UUIDV4 } = require('sequelize');
const sequelize = require('../database/database')

class Student extends Model {}

Student.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:UUIDV4
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      stack: {
        type: DataTypes.STRING,
        allowNull:false
      },
      gender:{
        type:DataTypes.STRING,
        allowNull:false
      },
      centre:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false
      },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'student', // We need to choose the model name
    timestamps: true
  },
);

// the defined model is the class itself
module.exports = Student;