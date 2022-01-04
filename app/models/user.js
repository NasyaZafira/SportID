'use strict';
const {
  Model
} = require('sequelize');

const jwt = require('jsonwebtoken');

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

    static register = ({ username, password }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({ username, password: encryptedPassword })
    }

  };

  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return user;
};
