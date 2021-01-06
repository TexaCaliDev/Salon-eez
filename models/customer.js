'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Stylist,{
        foreignKey: 'client_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Customer.init({
    customer_name: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    time_of_appoint: DataTypes.STRING,
    client_id:{
      type: DataTypes.INTEGER,
      field: 'client_id',
      references: {
        model: 'stylist',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};