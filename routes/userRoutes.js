const {
  register,
  profile,
  login,
  updateUser,
} = require("../controllers/userController");
const {
  userUpdateSchema,
  userLoginSchema,
  userCreateSchema,
} = require("../schemas/userSchema");

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
        payload: userCreateSchema,
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
        payload: userLoginSchema,
      },
    },
  },
  {
    method: "GET",
    path: "/profile",
    handler: profile,
    options: { auth: "jwt" },
  },
  {
    method: "PUT",
    path: "/profile",
    handler: updateUser,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
      },
      auth: "jwt",
      validate: {
        payload: userUpdateSchema,
      },
    },
  },
];
