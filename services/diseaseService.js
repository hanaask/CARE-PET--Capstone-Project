const { Disease } = require("../models");

const getAllDiseases = async () => {
  try {
    const diseases = await Disease.findAll();
    return diseases;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllDiseases };
