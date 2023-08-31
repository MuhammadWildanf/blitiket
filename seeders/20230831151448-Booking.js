'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const fs = require('fs')
   let data = JSON.parse(fs.readFileSync('./data/booking.json','utf-8'))
      .map(el => {

        el.createdAt = new Date()
        el.updatedAt = new Date()
        return el
      })
    await queryInterface.bulkInsert('Bookings', data , {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
