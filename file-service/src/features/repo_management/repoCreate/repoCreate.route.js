const express = require('express')
const router = express.Router()
const { createRepo } = require('./repoCreate.controller')
const { validateCreateRepo } = require('./repoCreate.middleware')

/**
 * @openapi
 * /api/repo/createRepo:
 *   post:
 *     tags: [Repo Management]
 *     summary: Create a repo or add a sub file to an existing repo
 *     description: Creates a new repo for the user. Pass subFileName to add a sub file to an existing repo; otherwise a new main repo is created.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - mainFileName
 *             properties:
 *               userId:
 *                 type: string
 *                 description: MongoDB ObjectId of the repo owner
 *                 example: 507f1f77bcf86cd799439011
 *               mainFileName:
 *                 type: string
 *                 description: Name of the main repo/file
 *                 example: project-alpha
 *               main_description:
 *                 type: string
 *                 description: Description for the main repo
 *                 example: Main project repository
 *               subFileName:
 *                 type: string
 *                 description: Name of the sub file to add (optional)
 *                 example: src
 *               sub_description:
 *                 type: string
 *                 description: Description for the sub file
 *                 example: Source code files
 *     responses:
 *       201:
 *         description: Repo created successfully
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
 *                   example: Repo created successfully
 *                 url:
 *                   type: string
 *                   example: Bytebin/project-alpha
 *       400:
 *         description: Validation failed (missing fields or invalid userId)
 *       409:
 *         description: Conflict - main file or sub file already exists
 *       500:
 *         description: Internal Server Error
 */
router.post("/createRepo", validateCreateRepo, createRepo)

module.exports = router
