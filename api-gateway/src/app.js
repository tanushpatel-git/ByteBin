const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./lib/swagger')
const codePush = require('./features/code-push/code-push.route')
const codeUpdate = require('./features/code-update/code-update.route')
const repoRoutes = require('./features/repo/repo.routes')
const blogRoutes = require("./features/blog/blog.routes");
const commentRoutes = require("./features/comments/comment.routes");
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser());

// Cors setup 
app.use(cors({
    origin: process.env.LOCAL_FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))


// json middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
app.use('/api/push', codePush);
app.use('/api/update', codeUpdate);
app.use('/api/repo', repoRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'ByteBin API Gateway Docs'
}));

module.exports = app