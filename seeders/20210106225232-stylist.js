'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('stylists',[{
     stylist_name: "Mike",
     stylist_email: 'Mike@email.com',
     createdAt: new Date(),
     updatedAt: new Date()
   },
  {
    stylist_name: "Mad",
    stylist_email: 'Mad@email.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
    stylist_name: "Obi",
    stylist_email: 'Obi@email.com',
    createdAt: new Date(),
     updatedAt: new Date()
}])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stylists',null,{})
  }
};
