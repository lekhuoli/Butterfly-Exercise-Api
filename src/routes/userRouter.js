var express = require("express");
const UserController = require("../controllers/UserController");
var router = express.Router();

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  UserController.getOne(req, res);
});
router.post("/", (req, res) => {
  UserController.post(req, res);
});
router.put("/:id", (req, res) => {
  UserController.put(req, res);
});
router.delete("/:id", (req, res) => {
  UserController.delete(req, res);
});

module.exports = router;
