const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "ByteBin File Service API",
        version: "1.0.0",
        description: "API documentation for the ByteBin file-service microservice. Covers repo creation, update, delete, commit-based retrieval, and paginated listing."
    },
    servers: [
        {
            url: "http://localhost:8008",
            description: "API Gateway (common entry point)"
        },
        {
            url: "http://localhost:8011",
            description: "Local file-service server"
        },
        {
            url: `http://localhost:${process.env.PORT || 8011}`,
            description: "File-service server"
        }
    ],
    tags: [
        {
            name: "Repo Management",
            description: "Endpoints for managing repos"
        }
    ]
}

const options = {
    swaggerDefinition,
    apis: ["./src/features/repo_management/**/*.route.js"]
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec