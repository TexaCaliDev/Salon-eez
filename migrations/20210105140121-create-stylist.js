'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stylists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stylist_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stylist_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customer_id: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      equip_id: {
        type: Sequelize.INTEGER,
        field: 'equip_id',
        references: {
          model: 'equipments',
          key: 'id'
        }
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
    await queryInterface.dropTable('stylists');
  }
};