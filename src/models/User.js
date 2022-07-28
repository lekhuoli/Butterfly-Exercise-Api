// const { DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
// id:{
//     type:DataTypes.STRING,
//     allowNull:false,
//     autoIncrement:true,
//     primaryKey:true,

// },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   });

// User.hasMany(Comment, {
//   as: "comments",
//   foreignKey: "userId",
// });

//   return User;
// };

const Sequelize = require("sequelize");
const Comment = require("./Comment");
//global sequelize
const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(),
    allowNull: false,
    unique: true,
  },
});
// User.hasMany(Comment, {
//   as: "comments",
//   foreignKey: "userId",
// });
module.exports = User;
