"use strict";

const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const { jwtSecret } = require("./config/jwtConfig");

const validate = async function (decoded, request, h) {
  // Lakukan validasi token di sini (misalnya memeriksa di database)
  return { isValid: true, credentials: decoded };
};

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register(require("hapi-auth-jwt2"));
  server.auth.strategy("jwt", "jwt", {
    key: jwtSecret,
    validate,
    verifyOptions: { algorithms: ["HS256"] },
  });
  server.auth.default("jwt");

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
