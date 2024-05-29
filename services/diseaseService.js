const { Disease, Treatment, Product } = require("../models");

const getAllDiseases = async () => {
  try {
    const diseases = await Disease.findAll({
      include: [
        {
          model: Treatment,
          as: "treatments",
        },
        {
          model: Product,
          as: "products",
        },
      ],
    });
    return diseases;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllDiseases };
