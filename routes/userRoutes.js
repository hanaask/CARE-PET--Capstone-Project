const {
  register,
  profile,
  login,
  validate,
} = require("../controllers/userController");
const Joi = require("@hapi/joi");

module.exports = [
  {
    method: "POST",
    path: "/signup",
    handler: register,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
      },
      auth: false, // Tidak memerlukan autentikasi JWT untuk registrasi
      validate: {
        payload: Joi.object({
          photo: Joi.string(),
          username: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
      },
      auth: false, // Tidak memerlukan autentikasi JWT untuk login
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/profile",
    handler: profile,
    options: { auth: "jwt" },
  },
];
