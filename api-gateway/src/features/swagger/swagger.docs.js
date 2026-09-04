/**
 * @openapi
 * /api/blogs:
 *   post:
 *     tags: [Blogs]
 *     summary: Create a blog
 *     description: Creates a blog. Author is taken from the authenticated user. (proxied to blog-service)
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
 *               coverImage:
 *                 type: string
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
 *     description: Returns all blogs sorted newest first. (proxied to blog-service)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Blogs fetched successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/blogs/{id}:
 *   get:
 *     tags: [Blogs]
 *     summary: Get a single blog
 *     description: Fetches one blog by id and increments its views. (proxied to blog-service)
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
 *     description: Updates blog fields. Only the author can update. (proxied to blog-service)
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
 *         description: Not authorized to update this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     tags: [Blogs]
 *     summary: Delete a blog
 *     description: Deletes a blog. Only the author can delete. (proxied to blog-service)
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
 *         description: Not authorized to delete this blog
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/comments/{blogId}:
 *   post:
 *     tags: [Comments]
 *     summary: Add a comment to a blog
 *     description: Creates a comment on a blog. (proxied to blog-service)
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
 *         description: Validation failed
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 *   get:
 *     tags: [Comments]
 *     summary: Get comments for a blog
 *     description: Returns paginated comments using a cursor. (proxied to blog-service)
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
 *         description: Optional cursor (comment id)
 *     responses:
 *       200:
 *         description: Comments fetched successfully
 *       400:
 *         description: Validation failed
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/comments/{commentId}:
 *   patch:
 *     tags: [Comments]
 *     summary: Update a comment
 *     description: Updates a comment's content. Only the author can update. (proxied to blog-service)
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
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       403:
 *         description: Not authorized to update this comment
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     tags: [Comments]
 *     summary: Delete a comment
 *     description: Deletes a comment. Only the author can delete. (proxied to blog-service)
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
 *       403:
 *         description: Not authorized to delete this comment
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/push/execute:
 *   post:
 *     tags: [Code]
 *     summary: Push code to a repo
 *     description: Pushes a full set of files to a repo or sub file with an LLM-generated commit. (proxied to llms-service)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - files
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 507f1f77bcf86cd799439011
 *               id:
 *                 type: string
 *               files:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *               cwd:
 *                 type: string
 *               mainFileName:
 *                 type: string
 *               subFileName:
 *                 type: string
 *     responses:
 *       201:
 *         description: Code pushed successfully
 *       400:
 *         description: Validation failed
 *       404:
 *         description: Repo or sub file not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/update/execute:
 *   put:
 *     tags: [Code]
 *     summary: Update code in a repo
 *     description: Updates files/cwd/commit on a repo or sub file with an optional LLM-generated commit. (proxied to llms-service)
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
 *                 example: 507f1f77bcf86cd799439011
 *               id:
 *                 type: string
 *               mainFileName:
 *                 type: string
 *               subFileName:
 *                 type: string
 *               files:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *               cwd:
 *                 type: string
 *               commitMessage:
 *                 type: string
 *               prDescription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Code updated successfully
 *       400:
 *         description: Validation failed
 *       404:
 *         description: Repo or sub file not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/repo/createRepo:
 *   post:
 *     tags: [Repo Management]
 *     summary: Create a repo or add a sub file
 *     description: Creates a new repo for the user. Pass subFileName to add a sub file to an existing repo. (proxied to file-service)
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
 *                 example: 507f1f77bcf86cd799439011
 *               mainFileName:
 *                 type: string
 *                 example: project-alpha
 *               main_description:
 *                 type: string
 *               subFileName:
 *                 type: string
 *               sub_description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Repo created successfully
 *       400:
 *         description: Validation failed
 *       409:
 *         description: Conflict - main file or sub file already exists
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/repo/getRepoByCommits/{userId}:
 *   put:
 *     tags: [Repo Management]
 *     summary: Get repos by commit search
 *     description: Returns repos whose commits match the searched words for the user. userId in path, search in body. (proxied to file-service)
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
 *                 example: feat update
 *     responses:
 *       200:
 *         description: Repos fetched by commits (or empty list)
 *       400:
 *         description: Validation failed
 *       404:
 *         description: No repos found for this user
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/repo/getAllRepos/{userId}:
 *   get:
 *     tags: [Repo Management]
 *     summary: Get all repos with pagination
 *     description: Fetches repos for a user paginated by page and limit. (proxied to file-service)
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
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 15
 *           maximum: 100
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
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     hasNextPage:
 *                       type: boolean
 *                     hasPrevPage:
 *                       type: boolean
 *       400:
 *         description: Validation failed
 *       500:
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/repo/deleteRepo:
 *   post:
 *     tags: [Repo Management]
 *     summary: Delete a repo or a sub file
 *     description: Deletes an entire repo, or a sub file when subFileName is provided. If it is the last sub file, the whole repo is deleted. (proxied to file-service)
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
 *                 example: 507f1f77bcf86cd799439011
 *               mainFileName:
 *                 type: string
 *                 example: project-alpha
 *               subFileName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Repo or sub file deleted successfully
 *       400:
 *         description: Validation failed
 *       404:
 *         description: Repo or sub file not found
 *       500:
 *         description: Internal Server Error
 */