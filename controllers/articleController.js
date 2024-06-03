const articleService = require("../services/articleService");

const getAllArticles = async (request, h) => {
  try {
    const articles = await articleService.getAllArticles();
    return h.response(articles).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const getArticlesByCategory = async (request, h) => {
  try {
    const articles = await articleService.getArticlesByCategory(
      request.params.category
    );
    return h.response(articles).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { getAllArticles, getArticlesByCategory };
