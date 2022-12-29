const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name_surname: {
        type: DataTypes.TEXT,
      },
      profile_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image_path: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      website: {
        type: DataTypes.STRING,
      },
      password: {
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
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      tableName: "users",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
   //sequelize.sync({force:true}) //force: true
};
