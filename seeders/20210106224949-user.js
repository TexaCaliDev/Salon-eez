'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users',[{
     company_name: "Ben's company",
     company_email: "Ben@email.com",
     company_password: "ben",
     createdAt: new Date(),
     updatedAt: new Date
   },{
    company_name: "Epik's company",
    company_email: "chris@email.com",
    company_password: "chris",
    createdAt: new Date(),
     updatedAt: new Date
   }])
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users',null,{})
  }
};
