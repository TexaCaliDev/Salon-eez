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
      Stylist.hasMany(models.Customer, {
        foreignKey: 'stylist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Stylist.hasMany(models.Equipment, {
        foreignKey: 'stylist_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  };
  Stylist.init({
    stylist_name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    stylist_email:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stylist',
    tableName: 'stylists'
  });
  return Stylist;
};