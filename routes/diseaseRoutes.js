const {
  getAllDiseases,
  getDiseasesByCategory,
  getDiseaseById,
} = require("../controllers/diseaseController");

module.exports = [
  {
    method: "GET",
    path: "/disease",
    handler: getAllDiseases,
  },
  {
    method: "GET",
    path: "/disease/{category}",
    handler: getDiseasesByCategory,
  },
  {
    method: "GET",
    path: "/disease/detail/{id}",
    handler: getDiseaseById,
  },
  // Tambahkan rute lainnya seperti POST, PUT, DELETE
];
