const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./lib/swagger')
const blogRoutes = require("./features/code-push/blog.route");
const commentRoutes = require("./features/comments/comment.route");
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'ByteBin Blog Service API Docs'
}))

module.exports = app    