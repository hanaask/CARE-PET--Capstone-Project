const articleRoutes = require("./articleRoutes");
const diseaseRoutes = require("./diseaseRoutes");
const productRoutes = require("./productRoutes");
const routes = [...diseaseRoutes, ...articleRoutes, ...productRoutes];

module.exports = routes;
