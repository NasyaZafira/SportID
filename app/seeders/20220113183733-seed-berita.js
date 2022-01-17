'use strict';
const sourceBerita = require('../models/data.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const mappedBerita = sourceBerita.arrayOfProducts.map((berita) => {
      return {
        imageBerita: berita.imageBerita,
        judulBerita: berita.judulBerita,
        isiBerita: berita.isiBerita,
        kategori: berita.kategori,
        admin_name: berita.admin_name,
        isTrending: berita.isTrending,
        createdAt: berita.createdAt,
        updatedAt: berita.updatedAt
      };
    }); //==> (LINE 6 SAMPAI 16 DIKETIK SESUAI ISI DARI models/data.json)
    await queryInterface.bulkInsert('berita', mappedBerita, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Products', null, {}); //==> (Ditulis sesuai isi dari models/data.json)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
