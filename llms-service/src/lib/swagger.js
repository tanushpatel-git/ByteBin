const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "ByteBin LLMs Service API",
        version: "1.0.0",
        description: "API documentation for the ByteBin llms-service microservice. Covers code push and code update operations that generate commit messages and PR descriptions."
    },
    servers: [
        {
            url: "http://localhost:8008",
            description: "API Gateway (common entry point)"
        },
        {
            url: "http://localhost:8009",
            description: "Local llms-service server"
        }
    ],
    tags: [
        {
            name: "Code",
            description: "Endpoints for pushing and updating code through LLM-generated commits"
        }
    ]
}

const options = {
    swaggerDefinition,
    apis: [
        "./src/features/code-push/code-push.route.js",
        "./src/features/code-update/code-update.route.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec