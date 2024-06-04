"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Diseases", [
      {
        id: "1d2e3f4g-5678-9abc-def0-1234567890ab",
        photo: "https://d2zp5xs5cp8zlg.cloudfront.net/image-87716-800.jpg",
        name: "Dandruff",
        category: "Skin",
        symptoms: "Flaking, Itching, Red Scalp",
        description:
          "Dandruff is a common scalp condition that causes flaky skin.",
      },
      {
        id: "2a3b4c5d-6789-0abc-def1-2345678901bc",
        photo:
          "https://cdn.shopify.com/s/files/1/0278/5181/7053/files/Atopic-dermatits-on-pit-bull-neck-300x298.jpg",
        name: "Dermatitis",
        category: "Skin",
        symptoms: "Redness, Swelling, Itching",
        description:
          "Dermatitis is an inflammation of the skin caused by various irritants.",
      },
      {
        id: "3b4c5d6e-7890-1abc-def2-3456789012cd",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNvz-xS6DPvtHrjwR9PkA3ll5E3AtGC7MkQ&s",
        name: "Ear Infection",
        category: "Ear",
        symptoms: "Ear Pain, Discharge, Hearing Loss",
        description:
          "An ear infection is an inflammation of the inner, middle, or outer ear.",
      },
      {
        id: "4c5d6e7f-8901-2abc-def3-4567890123de",
        photo:
          "https://www.dogster.com/wp-content/uploads/2024/03/Closeup-of-infected-mites-and-fleas-on-a-dogs-fur-sucking-blood_ThamKC_Shutterstock.jpg",
        name: "Fleas",
        category: "Fleas",
        symptoms: "Itching, Red Bumps, Hair Loss",
        description:
          "Fleas are small flightless insects that infest the fur and skin of animals.",
      },
      {
        id: "5d6e7f8g-9012-3abc-def4-5678901234ef",
        photo:
          "https://d12fifzdy7ujh4.cloudfront.net/files/blog/110/large/ringworm.jpg",
        name: "Ringworm",
        category: "Fungal",
        symptoms: "Circular Rash, Itching, Redness",
        description:
          "Ringworm is a fungal infection that affects the skin, hair, and nails.",
      },
      {
        id: "6e7f8g9h-0123-4abc-def5-6789012345fg",
        photo:
          "https://images.ctfassets.net/4dmg3l1sxd6g/3p5WtSlMV6yBw0SvLUOLG5/b324341d1da399f0f8cd520907cc16df/1-sebaceous-hyperplasia_0-45636-gallery.jpg_-_en",
        name: "Skin Tumors",
        category: "Skin",
        symptoms: "Lumps, Discoloration, Ulcers",
        description:
          "Skin tumors can be benign or malignant growths on the skin.",
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
