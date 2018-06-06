/* eslint-disable no-unused-vars */

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {});
  Reviews.associate = (models) => {
    // associations can be defined here
  };
  return Reviews;
};
