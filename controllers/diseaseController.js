const diseaseService = require("../services/diseaseService");

const getAllDiseases = async (request, h) => {
  try {
    const users = await diseaseService.getAllDiseases();
    return h.response(users).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { getAllDiseases };
