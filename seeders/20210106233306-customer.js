'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('customers',[{
    customer_name: "Ben",
    customer_email: "Ben@email.com",
    time_of_appoint: "12:30pm",
    stylist_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
  {
    customer_name: "emily",
    customer_email: "emily@email.com",
    time_of_appoint: "11:30pm",
    stylist_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    customer_name: "emily",
    customer_email: "emily@email.com",
    time_of_appoint: "11:30pm",
    stylist_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    customer_name: "chris",
    customer_email: "chris@email.com",
    time_of_appoint: "9:30pm",
    stylist_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers',null,{})
  }
};
