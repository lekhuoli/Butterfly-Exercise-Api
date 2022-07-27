const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comments", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    moodValue: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Comment;
};
