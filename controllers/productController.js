const productService = require("../services/productService");

const getAllProducts = async (request, h) => {
  try {
    const products = await productService.getAllProducts();
    return h.response(products).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { getAllProducts };
