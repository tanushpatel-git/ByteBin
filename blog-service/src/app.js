const express = require('express')
const app = express()
const blogRoutes = require("./features/code-push/blog.route");
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
app.use("/api/blogs", blogRoutes);

module.exports = app    