'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  admin.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    nomoHp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};