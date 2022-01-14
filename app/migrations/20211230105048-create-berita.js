'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('berita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judulBerita: {
        type: Sequelize.STRING
      },
      isiBerita: {
        type: Sequelize.TEXT
      },
      kategori: {
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
    await queryInterface.dropTable('berita');
  }
};