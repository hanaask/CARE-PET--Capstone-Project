const { Disease, Treatment, Product } = require("../models");

const getAllDiseases = async () => {
  try {
    const diseases = await Disease.findAll();
    return diseases;
  } catch (error) {
    throw error;
  }
};

const getDiseasesByCategory = async (category) => {
  try {
    const diseases = await Disease.findAll({ where: { category: category } });
    return diseases;
  } catch (error) {
    throw error;
  }
};

const getDiseaseById = async (id) => {
  try {
    const disease = await Disease.findByPk(id, {
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
    return disease;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllDiseases, getDiseaseById, getDiseasesByCategory };
