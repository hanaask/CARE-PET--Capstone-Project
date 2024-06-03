const { where } = require("sequelize");
const { Article } = require("../models");

const getAllArticles = async () => {
  try {
    const articles = await Article.findAll();
    return articles;
  } catch (error) {
    throw error;
  }
};

const getArticlesByCategory = async (category) => {
  try {
    const articles = await Article.findAll({ where: { category: category } });
    return articles;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllArticles, getArticlesByCategory };
