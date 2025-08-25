'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student_grade', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      week: {
        type: Sequelize.INTEGER,
        allowNull: false    
      },
      punctuality: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      assignment: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      classwork: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      personal_defence: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      attendance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      studentId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student_grade');
  }
};