const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "post",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      content:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: ""
      },
      image_path: {
        type: DataTypes.STRING,
      },
      video_path: {
        type: DataTypes.STRING,
      },
      audio_path: {
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
      userId:{
        allowNull: false,
        type: DataTypes.UUID,
      }
    },
    {
      tableName: "posts",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
  //sequelize.sync({force:true}) //force: true
};
