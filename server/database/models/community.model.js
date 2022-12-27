const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "community",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      community_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isDeleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      tableName: "community",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
  sequelize.sync({ alter: true }); //force: true
};
