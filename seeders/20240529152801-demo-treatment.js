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
          name: "Dandruff Treatment",
          description:
            "Use a medicated shampoo specifically designed for dandruff. Regular brushing to remove flakes and improve circulation can help. Dietary supplements with omega-3 fatty acids may reduce flaking. Consult a veterinarian for the best treatment plan.",
          diseaseId: "1d2e3f4g-5678-9abc-def0-1234567890ab", // Foreign key referencing Disease (Dandruff)
        },
        {
          id: "5h6i7j8k-9012-3cde-ef45-678901bcde23",
          name: "Dermatitis Treatment",
          description:
            "Treatment may include topical ointments or creams to reduce inflammation. Avoid known allergens and irritants. Regular bathing with hypoallergenic shampoos can help. Oral medications or antibiotics may be prescribed by a vet.",
          diseaseId: "2a3b4c5d-6789-0abc-def1-2345678901bc", // Foreign key referencing Disease (Dermatitis)
        },
        {
          id: "6i7j8k9l-0123-4def-ef56-789012cdef34",
          name: "Ear Infection Treatment",
          description:
            "Clean the ear with a vet-recommended solution. Administer prescribed ear drops or ointments. Oral antibiotics may be needed for severe cases. Keep the ears dry and clean to prevent recurrence.",
          diseaseId: "3b4c5d6e-7890-1abc-def2-3456789012cd", // Foreign key referencing Disease (Ear Infection)
        },
        {
          id: "7j8k9l0m-1234-5efg-ef67-890123defg45",
          name: "Flea Treatment",
          description:
            "You need to start with your dog’s flea treatment: Flea shampoo might be recommended. The shampoo will kill the fleas on the body, and you will see them fall out of the fur as you rinse your dog. Once the shampoo has been rinsed, the effect quickly wears off. Therefore, shampoo is best used in combination with another product. Topical liquids are usually the flea treatment of choice. They take just a few hours to start working and are very effective. Prescription products tend to be most effective. Insect development inhibitors (IDI) may be administered orally. There are also injectable products that can be used. Most flea collars and powders are much less effective than the other treatments. However, a new collar called 'Seresto' is very effective and offers months of protection. The veterinarian may prescribe flea medicine for dogs to control skin irritation and soothe the itch. Make sure to keep the vet informed of the progress and be sure to contact them if you are concerned about the potential side effects of medications, liquids, or any aspect of the treatment.",
          diseaseId: "4c5d6e7f-8901-2abc-def3-4567890123de", // Foreign key referencing Disease (Fleas)
        },
        {
          id: "8k9l0m1n-2345-6fgh-ef78-901234efgh56",
          name: "Ringworm Treatment",
          description:
            "Antifungal creams or ointments are commonly used. Oral antifungal medications may be prescribed for severe cases. Regular cleaning of the infected area and the surrounding environment is crucial. Keep the infected animal isolated to prevent spreading.",
          diseaseId: "5d6e7f8g-9012-3abc-def4-5678901234ef", // Foreign key referencing Disease (Ringworm)
        },
        {
          id: "9l0m1n2o-3456-7ghi-ef89-012345fghi67",
          name: "Skin Tumors Treatment",
          description:
            "Treatment varies based on the type and severity of the tumor. Surgical removal is common for benign tumors. Malignant tumors may require chemotherapy or radiation. Regular monitoring and vet check-ups are essential for managing the condition.",
          diseaseId: "6e7f8g9h-0123-4abc-def5-6789012345fg", // Foreign key referencing Disease (Skin Tumors)
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
