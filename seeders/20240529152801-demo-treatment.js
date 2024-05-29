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
      "Treatments",
      [
        {
          id: "4g5h6i7j-8901-2bcd-ef34-567890abcd12",
          name: "Flea Shampoo",
          description: "A medicated shampoo to kill fleas and soothe the skin.",
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab", // Foreign key referencing Disease (Fleas)
        },
        {
          id: "5h6i7j8k-9012-3cde-f456-7890bcdef123",
          name: "Topical Mite Treatment",
          description:
            "A topical treatment to eliminate mites and relieve itching.",
          diseaseId: "2e3f4g5h-6789-0abc-def1-234567890bcd", // Foreign key referencing Disease (Mange)
        },
        {
          id: "6i7j8k9l-0123-4def-5678-90cdef234567",
          name: "Antifungal Cream",
          description: "A cream to treat fungal infections like ringworm.",
          diseaseId: "3f4g5h6i-7890-1abc-def2-34567890cdef", // Foreign key referencing Disease (Ringworm)
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
    return queryInterface.bulkDelete("Treatments", null, {});
  },
};
