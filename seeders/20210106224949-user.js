'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users',[{
     name: "Ben's company",
     email: "Ben@email.com",
     password_digest: "ben",
     createdAt: new Date(),
     updatedAt: new Date
   },{
    name: "Epik's company",
    email: "chris@email.com",
    password_digest: "chris",
    createdAt: new Date(),
     updatedAt: new Date
   }])
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users',null,{})
  }
};
