module.exports = (sequelize, DataTypes) => {
  const Disease = sequelize.define(
    "Disease",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      symptoms: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Disease;
};
