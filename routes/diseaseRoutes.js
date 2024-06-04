const {
  getAllDiseases,
  getDiseasesByCategory,
  getDiseaseById,
  deleteDisease,
  updateDisease,
  createDisease,
} = require("../controllers/diseaseController");
const verifyRole = require("../module/roleAuth");

module.exports = [
  {
    method: "GET",
    path: "/disease",
    handler: getAllDiseases,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/disease/{category}",
    handler: getDiseasesByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/disease/detail/{id}",
    handler: getDiseaseById,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/disease",
    handler: createDisease,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateAllData") }],
    },
  },
  {
    method: "PUT",
    path: "/disease",
    handler: updateDisease,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canUpdateAllData") }],
    },
  },
  {
    method: "DELETE",
    path: "/disease",
    handler: deleteDisease,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
