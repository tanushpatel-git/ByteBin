const express = require("express");
const router = express.Router();
const authMiddleware = require("../code-push/auth.middleware");
const { createComment, getComments, updateComment, deleteComment } = require("./comment.controller");

router.post("/:blogId", authMiddleware, createComment);
router.get("/:blogId", getComments);
router.patch("/:commentId", authMiddleware, updateComment);
router.delete("/:commentId", authMiddleware, deleteComment);

module.exports = router;
