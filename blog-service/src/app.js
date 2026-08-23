const express = require('express')
const app = express()
const blogRoutes = require("./features/code-push/blog.route");
const commentRoutes = require("./features/comments/comment.route");
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

module.exports = app    