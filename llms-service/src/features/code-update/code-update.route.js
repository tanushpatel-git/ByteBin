const express = require('express');
const router = express.Router();
const { executeUpdate } = require('./code-update.controller');
const { validateUpdate } = require('./code-update.middleware');

/**
 * @openapi
 * /api/update/execute:
 *   put:
 *     tags: [Code]
 *     summary: Update code in a repo
 *     description: Updates files, cwd, commitMessage, or prDescription on a repo (or sub file). If files are provided and no commitMessage/prDescription is supplied, they are generated via LLM.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mainFileName
 *             properties:
 *               userId:
 *                 type: string
 *                 description: MongoDB ObjectId of the repo owner (alternative to id)
 *                 example: 507f1f77bcf86cd799439011
 *               id:
 *                 type: string
 *                 description: MongoDB ObjectId of the repo owner (alternative to userId)
 *               mainFileName:
 *                 type: string
 *                 description: Name of the main repo/file
 *                 example: project-alpha
 *               subFileName:
 *                 type: string
 *                 description: Name of the sub file to update (optional)
 *                 example: src
 *               files:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *                 description: Map of relative file path to file content
 *               cwd:
 *                 type: string
 *                 description: Working directory
 *                 example: /repos/Bytebin/project-alpha
 *               commitMessage:
 *                 type: string
 *                 description: Commit message (generated via LLM if omitted and files provided)
 *                 example: "fix: update configurations"
 *               prDescription:
 *                 type: string
 *                 description: PR description (generated via LLM if omitted and files provided)
 *     responses:
 *       200:
 *         description: Code updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 update:
 *                   type: object
 *                   properties:
 *                     commitMessage:
 *                       type: string
 *                       nullable: true
 *                     prDescription:
 *                       type: string
 *                       nullable: true
 *                     fileCount:
 *                       type: integer
 *       400:
 *         description: Validation failed (missing user id, mainFileName, files, or nothing to update)
 *       404:
 *         description: Repo or sub file not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/execute', validateUpdate, executeUpdate);

module.exports = router;