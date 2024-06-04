const productService = require("../services/productService");

const getAllProducts = async (request, h) => {
  try {
    const products = await productService.getAllProducts();
    return h.response(products).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getProductsByCategory = async (request, h) => {
  try {
    const products = await productService.getProductsByCategory(
      request.params.category
    );
    return h.response(products).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const createProduct = async (request, h) => {
  try {
    await productService.createProduct(request.payload);

    return h
      .response({
        status: "success",
        message: "Product added successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const updateProduct = async (request, h) => {
  try {
    await productService.updateProduct(request.params.id, request.payload);
    return h
      .response({
        status: "success",
        message: "Product update successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const deleteProduct = async (request, h) => {
  try {
    await productService.deleteProduct(request.params.id);
    return h
      .response({
        status: "success",
        message: "Product delete successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};
