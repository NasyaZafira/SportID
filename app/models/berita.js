'use strict';
const {
  Model
} = require('sequelize');
const admin = require('./admin')
module.exports = (sequelize, DataTypes) => {
  class berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  berita.init({
    imageBerita: DataTypes.STRING,
    judulBerita: DataTypes.STRING,
    isiBerita: DataTypes.TEXT,
    kategori: DataTypes.STRING,
    admin_name: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: admin,
        key: 'nama'
      }
    },
    isTrending: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'berita',
    timestamps: false
  });
  return berita;
};