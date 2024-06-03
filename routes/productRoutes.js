const { getAllProducts } = require("../controllers/productController");

module.exports = [
  {
    method: "GET",
    path: "/product",
    handler: getAllProducts,
  },
];
