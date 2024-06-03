const { Dog, UserDog, User } = require("../models");

const addDog = async (payload, userId) => {
  try {
    const newDog = await Dog.create({
      photo: payload.photo,
      name: payload.name,
      about: payload.about,
      age: payload.age,
      birthday: payload.birthday,
      breed: payload.breed,
      skinColor: payload.skinColor,
      gender: payload.gender,
    });

    await UserDog.create({
      userId: userId,
      dogId: newDog.id,
    });

    return newDog;
  } catch (error) {
    throw error;
  }
};

const getAllDogs = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Dog,
      },
    });

    return user.Dogs;
  } catch (error) {
    throw error;
  }
};

const getDogById = async (userId, dogId) => {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Dog,
        where: {
          id: dogId,
        },
      },
    });
    return user.Dogs[0];
  } catch (error) {
    throw error;
  }
};

const updateDog = async (dogId, payload) => {
  try {
    const dog = await Dog.findByPk(dogId);

    if (!dog) {
      throw new Error("Dog not found");
    }

    const updatedDog = {
      ...dog,
      ...payload,
    };

    await dog.update(updatedDog);

    return dog;
  } catch (error) {
    throw error;
  }
};

module.exports = { addDog, getAllDogs, getDogById, updateDog };
