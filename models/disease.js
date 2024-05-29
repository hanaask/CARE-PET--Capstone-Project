"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disease.hasMany(models.Treatment, {
        foreignKey: "diseaseId",
        as: "treatments",
      });

      Disease.belongsToMany(models.Product, {
        through: "DiseaseProduct",
        foreignKey: "diseaseId",
        as: "products",
      });
    }
  }
  Disease.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      symptoms: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Disease",
    }
  );
  return Disease;
};
