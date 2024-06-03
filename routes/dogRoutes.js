const { options } = require("@hapi/joi/lib/base");
const {
  addDog,
  getAllDogs,
  getDogById,
  updateDog,
} = require("../controllers/dogController");

module.exports = [
  {
    method: "POST",
    path: "/dog",
    handler: addDog,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
      },
      auth: "jwt",
    },
  },
  {
    method: "GET",
    path: "/dog",
    handler: getAllDogs,
    options: {
      auth: "jwt",
    },
  },
  {
    method: "GET",
    path: "/dog/{dogId}",
    handler: getDogById,
    options: {
      auth: "jwt",
    },
  },
  {
    method: "PUT",
    path: "/dog/{dogId}",
    handler: updateDog,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
      },
      auth: "jwt",
    },
  },
];
