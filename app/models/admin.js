'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({ name, email, phoneNumber, password }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({ nama:name , email:email , nomorHp:phoneNumber , password: encryptedPassword })
    }
  };
  admin.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    nomorHp: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};