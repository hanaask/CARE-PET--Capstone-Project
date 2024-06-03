const {
  getAllArticles,
  getArticlesByCategory,
} = require("../controllers/articleController");

module.exports = [
  {
    method: "GET",
    path: "/article",
    handler: getAllArticles,
  },
  {
    method: "GET",
    path: "/article/{category}",
    handler: getArticlesByCategory,
  },
];
