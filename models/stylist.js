'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stylist.init({
    stylist_name: DataTypes.STRING,
    stylist_email: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stylist',
  });
  return Stylist;
};