const {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getProductsByCategory,
} = require("../controllers/productController");
const verifyRole = require("../module/roleAuth");

module.exports = [
  {
    method: "GET",
    path: "/product",
    handler: getAllProducts,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/product/{category}",
    handler: getProductsByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/product",
    handler: createProduct,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateAllData") }],
    },
  },
  {
    method: "PUT",
    path: "/product",
    handler: updateProduct,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canUpdateAllData") }],
    },
  },
  {
    method: "DELETE",
    path: "/product",
    handler: deleteProduct,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
