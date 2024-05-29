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
      "Products",
      [
        {
          id: "7j8k9l0m-1234-5def-6789-0abcdef12345",
          name: "Flea Collar",
          description: "A collar that repels fleas for up to 8 months.",
        },
        {
          id: "8k9l0m1n-2345-6efg-7890-1abcdef23456",
          name: "Medicated Shampoo",
          description: "Shampoo to treat and prevent skin infections.",
        },
        {
          id: "9l0m1n2o-3456-7fgh-8901-2abcdef34567",
          name: "Anti-Itch Spray",
          description: "Spray to relieve itching and soothe irritated skin.",
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
