const Sequelize = require("sequelize");
const User = require("./User");
//global sequelize
const Comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  moodValue: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  comment: {
    type: Sequelize.TEXT(),
    allowNull: true,
  },
});

Comment.belongsTo(User);
module.exports = Comment;
