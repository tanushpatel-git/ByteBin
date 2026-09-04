const express = require('express')
const router = express.Router()
const { getRepoByCommits, getAllRepos } = require('./repoGet.controller')
const { validateGetRepoByCommits, validateGetAllRepos } = require('./repoGet.middleware')

/**
 * @openapi
 * /api/repo/getRepoByCommits/{userId}:
 *   put:
 *     tags: [Repo Management]
 *     summary: Get repos grouped by commits matching the search
 *     description: Fetches all repos for a user and returns a flattened list of commit entries whose commitMessage or prDescription match the searched words (similarity match, comma or space separated). Each entry carries the commitMessage and prDescription along with a filesSnapshot at commit time. Only repos/sub files that have commit data are returned. userId is passed in the path and search is passed in the request body.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the repo owner
 *         example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 description: Words to match against commit messages or PR descriptions (comma or space separated)
 *                 example: feat update
 *     responses:
 *       200:
 *         description: Repos fetched by commits (or empty list)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Repos fetched by commits
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       titleCode:
 *                         type: string
 *                       main_url:
 *                         type: string
 *                       commitMessage:
 *                         type: string
 *                       prDescription:
 *                         type: string
 *                       filesSnapshot:
 *                         type: object
 *                       type:
 *                         type: string
 *                         enum: [main, sub]
 *       400:
 *         description: Validation failed (missing or invalid userId)
 *       404:
 *         description: No repos found for this user
 *       500:
 *         description: Internal Server Error
 */
router.put("/getRepoByCommits/:userId", validateGetRepoByCommits, getRepoByCommits)

/**
 * @openapi
 * /api/repo/getAllRepos/{userId}:
 *   get:
 *     tags: [Repo Management]
 *     summary: Get all repos with pagination (15 per page)
 *     description: Fetches repos for a user paginated 15 at a time by default. Set page and limit query params to navigate.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the repo owner
 *         example: 507f1f77bcf86cd799439011
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (1-indexed)
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 15
 *           maximum: 100
 *         description: Number of repos per page (default 15, max 100)
 *         example: 15
 *     responses:
 *       200:
 *         description: Repos fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Repos fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 15
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     hasNextPage:
 *                       type: boolean
 *                     hasPrevPage:
 *                       type: boolean
 *       400:
 *         description: Validation failed (missing/invalid userId or invalid page)
 *       500:
 *         description: Internal Server Error
 */
router.get("/getAllRepos/:userId", validateGetAllRepos, getAllRepos)

module.exports = router