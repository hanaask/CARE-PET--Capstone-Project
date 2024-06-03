const userService = require("../services/userService");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwtConfig");

const register = async (request, h) => {
  try {
    const user = await userService.register(request.payload);
    return h
      .response({
        status: "success",
        message: "User registered successfully!",
        user,
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const login = async (request, h) => {
  try {
    const { username, password } = request.payload;
    const user = await userService.validateUser(username, password);
    if (!user) {
      return h.response({ error: "Invalid username or password" }).code(401);
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecret,
      { algorithm: "HS256", expiresIn: "5h" }
    );
    return h.response({ token: "Bearer " + token }).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const profile = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const user = await userService.profile(userId);
    return h.response(user).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { register, login, profile };
