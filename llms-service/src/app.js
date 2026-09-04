const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./lib/swagger')
const codePush = require('./features/code-push/code-push.route')
const codeUpdate = require('./features/code-update/code-update.route')
const app = express()
// Cors setup 
app.use(cors({
    origin: process.env.LOCAL_FRONTEND_URL,
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'ByteBin LLMs Service API Docs'
}))



module.exports = app
