const express = require('express')
const router = express.Router()
const { deleteRepo } = require('./repoDelete.controller')
const { validateDeleteRepo } = require('./repoDelete.middleware')

/**
 * @openapi
 * /api/repo/deleteRepo:
 *   post:
 *     tags: [Repo Management]
 *     summary: Delete a repo or a sub file of a repo
 *     description: Deletes an entire repo by userId and mainFileName. If subFileName is provided, only that sub file is removed. If it is the last sub file, the whole repo is deleted.
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
 *               subFileName:
 *                 type: string
 *                 description: Name of the sub file to delete (optional)
 *                 example: src
 *     responses:
 *       200:
 *         description: Repo or sub file deleted successfully
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
 *                   example: Repo 'project-alpha' deleted successfully
 *       400:
 *         description: Validation failed (missing fields or invalid userId)
 *       404:
 *         description: Repo or sub file not found
 *       500:
 *         description: Internal Server Error
 */
router.post("/deleteRepo", validateDeleteRepo, deleteRepo)

module.exports = router