"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Diseases", [
      {
        id: "1d2e3f4g-5678-9abc-def0-1234567890ab",
        photo: "Fleas.jpg",
        name: "Fleas",
        category: "Fleas",
        symptoms: "Itching, Red Bumps, Hair Loss",
        description:
          "Fleas are small flightless insects that infest the fur and skin of animals.",
      },
      {
        id: "2e3f4g5h-6789-0abc-def1-234567890bcd",
        photo: "Mange.jpg",
        name: "Mange",
        category: "Mange",
        symptoms: "Severe Itching, Red Skin, Hair Loss",
        description: "Mange is a skin disease caused by parasitic mites.",
      },
      {
        id: "3f4g5h6i-7890-1abc-def2-34567890cdef",
        photo: "Ringworm.jpg",
        name: "Ringworm",
        category: "Ringworm",
        symptoms: "Circular Patches of Hair Loss, Red Skin, Itching",
        description:
          "Ringworm is a fungal infection that affects the skin, hair, and nails.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Diseases", null, {});
  },
};
