const dogService = require("../services/dogService");

const addDog = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const newDog = await dogService.addDog(request.payload, userId);
    return h
      .response({
        status: "success",
        message: "Dog added successfully!",
        data: newDog,
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getAllDogs = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const dogs = await dogService.getAllDogs(userId);
    return h.response(dogs).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const getDogById = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const dog = await dogService.getDogById(userId, request.params.dogId);

    return h.response(dog).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const updateDog = async (request, h) => {
  try {
    const dog = await dogService.updateDog(
      request.params.dogId,
      request.payload
    );
    return h
      .response({
        status: "success",
        message: "Dog updated successfully!",
        data: dog,
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { addDog, getAllDogs, getDogById, updateDog };
