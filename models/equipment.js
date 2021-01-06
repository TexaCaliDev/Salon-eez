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
      Equipment.belongsTo(models.Stylist,{
        foreignKey: 'owner_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  };
  Equipment.init({
    equip_name: DataTypes.STRING,
    type_of: DataTypes.STRING,
    price: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      field: 'owner_id',
      references:{
        model: 'stylists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Equipment',
    tableName: 'equipments'
  });
  return Equipment;
};