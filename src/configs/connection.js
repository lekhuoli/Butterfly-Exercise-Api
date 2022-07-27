const Sequelize = require("sequelize");

const sequelize = new Sequelize("butterfly-exercise", "root", "", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  operatorsAliases: 0,
});

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("DB Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

dbConnection();

module.exports = sequelize;
global.sequelize = sequelize;
