'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment')
const wib = ' WIB'
const isDateTime = moment().locale('id').format('DD MMMM YYYY HH:mm:ss')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({ firstName, lastName, email, phoneNumber, password }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({ name: `${firstName} ${lastName}`, email, phoneNumber, password: encryptedPassword, createdAt: isDateTime + wib, updatedAt: isDateTime + wib })
    }

  };

  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return user;
};
