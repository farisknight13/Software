'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pythons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pythons.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pythons',
    freezeTableName: true,
    underscoredAll: true,
    underscored: true,
    createAt: "created_at",
    updateAt: "updated_at",
  });
  return Pythons;
};