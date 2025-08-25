const { Sequelize, DataTypes, Model, } = require('sequelize');
const sequelize = require('../database/database');
const Student = require('./students');

class Student_grade extends Model { }

Student_grade.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    punctuality: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assignment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classwork: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personal_defence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Student,
        key: 'id'
      }
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'student_grade', // We need to choose the model name
    timestamps: true
  },
);

Student.hasMany(Student_grade, {
  foreignKey: 'studentId',
  as: 'Scores'
});

Student_grade.belongsTo(Student);

// the defined model is the class itself
module.exports = Student_grade;