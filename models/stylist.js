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
        foreignKey: customer_id,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Stylist.hasMany(models.Equipment, {
        foreignKey: equip_id,
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
    },
    customer_id:{
      type: DataTypes.INTEGER,
      field: 'customer_id',
      references: {
        model: 'equipments',
        key: 'id'
      } 
    },
    equip_id: {
      type:DataTypes.INTEGER,
      field: 'equip_id',
      references: {
        model: 'equipments',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stylist',
    tableName: 'stylists'
  });
  return Stylist;
};