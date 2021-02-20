'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Softs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Softs.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Softs',
    freezeTableName: true,
    underscoredAll: true,
    underscored: true,
    createAt: "created_at",
    updateAt: "updated_at",
  });
  return Softs;
};