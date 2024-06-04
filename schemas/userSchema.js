const Joi = require("@hapi/joi");

const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  // password: Joi.string().min(8).required(),
  password: Joi.string().required(),
});

const userCreateSchema = Joi.object({
  photo: Joi.string().uri().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required(),
  id: Joi.forbidden(),
});

const userUpdateSchema = Joi.object({
  photo: Joi.string().uri(),
  username: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(8),
  role: Joi.forbidden(), // Role tidak dapat diubah saat pembaruan
  id: Joi.forbidden(),
});

module.exports = { userLoginSchema, userCreateSchema, userUpdateSchema };
