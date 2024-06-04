const {
  getAllArticles,
  getArticlesByCategory,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");
const verifyRole = require("../module/roleAuth");

module.exports = [
  {
    method: "GET",
    path: "/article",
    handler: getAllArticles,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/article/{category}",
    handler: getArticlesByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/article/detail/{id}",
    handler: getArticleById,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/article",
    handler: createArticle,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateAllData") }],
    },
  },
  {
    method: "PUT",
    path: "/article",
    handler: updateArticle,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canUpdateAllData") }],
    },
  },
  {
    method: "DELETE",
    path: "/article",
    handler: deleteArticle,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
