const { DataTypes } = require("sequelize");

function applyRelationships(sequelize) {
  const {
    user,
    post
  } = sequelize.models;

  
  // user-post
  user.hasMany(post, {
    foreignKey: "userId"
  });
  post.belongsTo(user);


}

module.exports = { applyRelationships };
