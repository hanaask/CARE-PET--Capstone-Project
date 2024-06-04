const Joi = require("@hapi/joi");

const dogCreateSchema = Joi.object({
  photo: Joi.string().uri().required(),
  name: Joi.string().min(3).max(30).required(),
  about: Joi.string().max(500),
  age: Joi.number().integer().min(0).required(),
  birthday: Joi.date().required(),
  breed: Joi.string().required(),
  skinColor: Joi.string().required(),
  gender: Joi.string().valid("male", "female").required(),
  userId: Joi.forbidden(),
  dogId: Joi.forbidden(),
});

const dogUpdateSchema = Joi.object({
  photo: Joi.string().uri(),
  name: Joi.string().min(3).max(30),
  about: Joi.string().max(500),
  age: Joi.number().integer().min(0),
  birthday: Joi.date(),
  breed: Joi.string(),
  skinColor: Joi.string(),
  gender: Joi.string().valid("male", "female"),
  userId: Joi.forbidden(),
  dogId: Joi.forbidden(),
});

module.exports = { dogCreateSchema, dogUpdateSchema };
