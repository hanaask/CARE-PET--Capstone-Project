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
          photo: "Flea Collar.jpg",
          name: "Flea Collar",
          category: "Flea Collar",
          price: "70000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "8k9l0m1n-2345-6efg-7890-1abcdef23456",
          photo: "Medicated Shampoo.jpg",
          name: "Medicated Shampoo",
          category: "Medicated Shampoo",
          price: "50000",
          linkStore: "https://tokopedia.com",
        },
        {
          id: "9l0m1n2o-3456-7fgh-8901-2abcdef34567",
          photo: "Anti-Itch Spray.jpg",
          name: "Anti-Itch Spray",
          category: "Anti-Itch Spray",
          price: "30000",
          linkStore: "https://tokopedia.com",
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
