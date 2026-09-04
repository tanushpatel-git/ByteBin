const express = require('express')
const app = express()
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./lib/swagger')
const repoCreateRoute = require('./features/repo_management/repoCreate/repoCreate.route')
const repoDeleteRoute = require('./features/repo_management/repoDelete/repoDelete.route')
const repoGetRoute = require('./features/repo_management/repoGet/repoGet.route')

app.use(cors({
    origin: process.env.API_GATEWAY_URL,
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('uploads'))

app.use('/api/repo', repoCreateRoute)
app.use('/api/repo', repoDeleteRoute)
app.use('/api/repo', repoGetRoute)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'ByteBin File Service API Docs'
}))

module.exports = app