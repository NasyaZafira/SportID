'use strict';

const admin = require("../models/admin");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('berita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageBerita: {
        allowNull: false,
        type: Sequelize.STRING
      },
      judulBerita: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isiBerita: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      kategori: {
        allowNull: false,
        type: Sequelize.STRING
      },
      admin_name : {
        allowNull: false,
        type: Sequelize.STRING,
        reference: {
          model: admin,
          key: 'nama'
        }
      },
      isTrending : {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('berita');
  }
};