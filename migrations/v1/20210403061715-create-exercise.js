'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      E_part: {
        type: Sequelize.STRING
      },
      E_name: {
        type: Sequelize.STRING
      },
      E_setcal: {
        type: Sequelize.INTEGER
      },
      E_image: {
        type: Sequelize.STRING
      },
      E_imageOrg: {
        type: Sequelize.STRING
      },
      E_activeImg: {
        type: Sequelize.STRING
      },
      E_activeImage2: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('exercises');
  }
};