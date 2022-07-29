"use strict";
const { faker } = require("@faker-js/faker");

let Comments = [];
let Users = [];

function createRandomComment(userId) {
  return {
    userId,
    moodValue: faker.helpers.arrayElement([
      "Very Unhappy",
      "Unhappy",
      "Neutral",
      "Happy",
      "Very Happy",
    ]),
    comment: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}

function createRandomUser(userId) {
  return {
    id: userId,
    username: faker.name.findName(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  const userId = faker.datatype.number();

  Comments.push(createRandomComment(userId));
  Users.push(createRandomUser(userId));
});
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("comments", Comments, {});
    await queryInterface.bulkInsert("users", Users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("comments", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
