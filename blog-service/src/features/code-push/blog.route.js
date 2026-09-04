const blogcontroller = require("./blog.controller");
const { Router } = require("express");
const authMiddleware = require("./auth.middleware")
const router = Router();

/**
 * @openapi
 * /api/blogs:
 *   post:
 *     tags: [Blogs]
 *     summary: Create a blog
 *     description: Creates a blog. The author is taken from the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: My first blog
 *               content:
 *                 type: string
 *                 example: This is the blog content
 *               coverImage:
 *                 type: string
 *                 example: https://example.com/cover.png
 *               status:
 *                 type: string
 *                 enum: [draft, published, unpublished]
 *                 default: draft
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       500:
 *         description: Internal Server Error
 *   get:
 *     tags: [Blogs]
 *     summary: Get all blogs
 *     description: Returns all blogs sorted by newest first, with the author populated.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Blogs fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 blogs:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/blogs/{id}:
 *   get:
 *     tags: [Blogs]
 *     summary: Get a single blog
 *     description: Fetches one blog by id and increments its view count.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the blog
 *     responses:
 *       200:
 *         description: Blog fetched successfully
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 *   patch:
 *     tags: [Blogs]
 *     summary: Update a blog
 *     description: Updates blog fields. Only the author can update the blog.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
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
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               coverImage:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [draft, published, unpublished]
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       403:
 *         description: You are not authorized to update this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     tags: [Blogs]
 *     summary: Delete a blog
 *     description: Deletes a blog. Only the author can delete the blog.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the blog
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       403:
 *         description: You are not authorized to delete this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 */
router.post("/", authMiddleware, blogcontroller.createblog);
router.get("/", authMiddleware, blogcontroller.getblogs);
router.get("/:id", authMiddleware, blogcontroller.getblog);
router.patch("/:id", authMiddleware, blogcontroller.updateblog);
router.delete("/:id", authMiddleware, blogcontroller.deleteblog);
module.exports = router;