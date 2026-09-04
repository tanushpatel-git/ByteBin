const express = require("express");
const router = express.Router();
const authMiddleware = require("../code-push/auth.middleware");
const { createComment, getComments, updateComment, deleteComment } = require("./comment.controller");

/**
 * @openapi
 * /api/comments/{blogId}:
 *   post:
 *     tags: [Comments]
 *     summary: Add a comment to a blog
 *     description: Creates a comment on the given blog. The author is taken from the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 maxLength: 1000
 *                 example: Great post!
 *     responses:
 *       201:
 *         description: Comment created successfully
 *       400:
 *         description: Validation failed (invalid blog id, missing content, or content too long)
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 *   get:
 *     tags: [Comments]
 *     summary: Get comments for a blog
 *     description: Returns comments for a blog, paginated 10 at a time using a cursor.
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the blog
 *       - in: query
 *         name: cursor
 *         schema:
 *           type: string
 *         description: Optional cursor (comment id) to fetch older comments
 *     responses:
 *       200:
 *         description: Comments fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 comments:
 *                   type: array
 *                   items:
 *                     type: object
 *                 nextCursor:
 *                   type: string
 *                   nullable: true
 *                 hasMore:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Validation failed (invalid blog id or cursor)
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/comments/{commentId}:
 *   patch:
 *     tags: [Comments]
 *     summary: Update a comment
 *     description: Updates a comment's content. Only the author can update it.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 maxLength: 1000
 *                 example: Updated comment text
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Validation failed (invalid comment id, missing content, or content too long)
 *       403:
 *         description: You are not authorized to update this comment
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     tags: [Comments]
 *     summary: Delete a comment
 *     description: Deletes a comment. Only the author can delete it.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the comment
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       400:
 *         description: Validation failed (invalid comment id)
 *       403:
 *         description: You are not authorized to delete this comment
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal Server Error
 */
router.post("/:blogId", authMiddleware, createComment);
router.get("/:blogId", getComments);
router.patch("/:commentId", authMiddleware, updateComment);
router.delete("/:commentId", authMiddleware, deleteComment);

module.exports = router;