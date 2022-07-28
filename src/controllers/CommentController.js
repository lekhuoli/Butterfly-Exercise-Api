const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  async getAll(req, res) {
    try {
      const commentsData = await Comment.findAll({
        include: [User],
      });
      return res.status(200).json(commentsData);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const comment = await Comment.findOne({
        where: {
          id,
        },
        include: [User],
      });
      return res.json(comment);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  },

  async post(req, res) {
    try {
      const { name, moodValue, comment } = req.body;

      if (!name) {
        return res.status(404).json("Name field is required.");
      }
      if (!moodValue) {
        return res.status(404).json("Emoji must have to select.");
      }

      let user;
      user = await this.findUser(name);

      if (!user) {
        user = await this.createUser(name);
      }

      console.log(user.id);

      const newComment = await Comment.create({
        moodValue: moodValue,
        userId: user.id,
        comment: comment,
      });

      return res.status(201).json(newComment);
    } catch (error) {
      return res.status(404).json({ error });
    }
  },

  async put(req, res) {
    try {
      const { id } = req.params;
      const updatedData = await Comment.update(
        {
          moodValue: req.body.moodValue,
          userId: req.body.userId,
          comment: req.body.comment,
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
      await Comment.destroy({
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

  async findUser(name) {
    try {
      const user = await User.findOne({
        where: {
          username: name,
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
      return res.json("User not found.");
    }
  },

  async createUser(name) {
    try {
      const user = await User.create({
        username: name,
      });
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
      return res.json("Error creating user");
    }
  },
};
