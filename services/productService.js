const { Product } = require("../models");

const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProducts };
