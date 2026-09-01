const express = require("express");
const router = express.Router();
const { createComment, getComments, updateComment, deleteComment } = require("./comment.controller");

router.post("/:blogId", createComment);
router.get("/:blogId", getComments);
router.patch("/:commentId", updateComment);
router.delete("/:commentId", deleteComment);

module.exports = router;
