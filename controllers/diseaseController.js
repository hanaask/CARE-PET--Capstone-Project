const diseaseService = require("../services/diseaseService");

const getAllDiseases = async (request, h) => {
  try {
    const diseases = await diseaseService.getAllDiseases();
    return h.response(diseases).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getDiseasesByCategory = async (request, h) => {
  try {
    const diseases = await diseaseService.getDiseasesByCategory(
      request.params.category
    );
    return h.response(diseases).code(200);
  } catch (error) {}
};
const getDiseaseById = async (request, h) => {
  try {
    const disease = await diseaseService.getDiseaseById(request.params.id);
    return h.response(disease).code(200);
  } catch (error) {}
};

module.exports = { getAllDiseases, getDiseaseById, getDiseasesByCategory };
