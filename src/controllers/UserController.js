const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  async getAll(req, res) {
    try {
      const usersData = await User.findAll();
      return res.status(200).json(usersData);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: {
          id,
        },
      });
      return res.json(user);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },
  async post(req, res) {
    try {
      const newUser = await User.create({
        username: req.body.username,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },
  async put(req, res) {
    try {
      const { id } = req.params;
      const updatedData = await User.update(
        {
          username: req.body.username,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json(updatedData);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      await User.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json("User deleted.");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  },
};
