"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "DiseaseProducts",
      [
        {
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab", // Fleas
          productId: "7j8k9l0m-1234-5def-6789-0abcdef12345", // Flea Collar
        },
        {
          diseaseId: "2e3f4g5h-6789-0abc-def1-234567890bcd", // Mange
          productId: "8k9l0m1n-2345-6efg-7890-1abcdef23456", // Medicated Shampoo
        },
        {
          diseaseId: "3f4g5h6i-7890-1abc-def2-34567890cdef", // Ringworm
          productId: "9l0m1n2o-3456-7fgh-8901-2abcdef34567", // Anti-Itch Spray
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("DiseaseProducts", null, {});
  },
};
