var express = require("express");
var commentController = require("../controllers/CommentController");
var router = express.Router();

router.get("/", (req, res) => {
  commentController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  commentController.getOne(req, res);
});
router.post("/", (req, res) => {
  commentController.post(req, res);
});
router.put("/:id", (req, res) => {
  commentController.put(req, res);
});
router.delete("/:id", (req, res) => {
  commentController.delete(req, res);
});

module.exports = router;
