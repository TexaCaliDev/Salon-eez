'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Equipment.init({
    equip_name: DataTypes.STRING,
    type_of: DataTypes.STRING,
    price: DataTypes.STRING,
    stylist_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipment',
  });
  return Equipment;
};