'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipments',[{
      equip_name: "deere",
      type_of: "clippers",
      price: "$149.99+",
      stylist_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      equip_name: "deere",
      type_of: "clippers",
      price: "$149.99+",
      stylist_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      equip_name: "johns",
      type_of: "straight razor",
      price: "$149.99+",
      stylist_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipments',null,[])
  }
}
