'use strict';
const sourceBerita = require('../models/data.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const mappedProducts = sourceBerita.arrayOfProducts.map((produk) => {
    //   return {
    //     imgUrl: produk.imgUrl,
    //     name: produk.name,
    //     price: produk.price,
    //     categories: produk.category,
    //     subcategory: produk.subcategory,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   };
    // }); ==> (LINE 6 SAMPAI 16 DIKETIK SESUAI ISI DARI models/data.json)
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
    // await queryInterface.bulkDelete('Products', null, {}); ==> (Ditulis sesuai isi dari models/data.json)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
