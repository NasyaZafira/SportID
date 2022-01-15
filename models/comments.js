'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user')
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comments.init({
    isi_komen: DataTypes.TEXT,
    user_name: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: user,
        key: 'name'
      }
    }
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};
