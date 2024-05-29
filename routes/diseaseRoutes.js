const diseaseController = require("../controllers/diseaseController");

module.exports = [
  {
    method: "GET",
    path: "/disease",
    handler: diseaseController.getAllDiseases,
  },
  // Tambahkan rute lainnya seperti POST, PUT, DELETE
];
