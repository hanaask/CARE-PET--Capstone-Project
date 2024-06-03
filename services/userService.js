const { User } = require("../models");
const bcrypt = require("bcrypt");

const register = async (payload) => {
  try {
    await User.create({
      photo: payload.photo,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
  } catch (error) {
    throw error;
  }
};

const validateUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      return null;
    }
    if (!isPasswordValid) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const profile = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return { message: "User not found!" };
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { register, validateUser, profile };
