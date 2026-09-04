const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "ByteBin Blog Service API",
        version: "1.0.0",
        description: "API documentation for the ByteBin blog-service microservice. Covers blog CRUD and comments."
    },
    servers: [
        {
            url: "http://localhost:8008",
            description: "API Gateway (common entry point)"
        },
        {
            url: "http://localhost:8010",
            description: "Local blog-service server"
        }
    ],
    tags: [
        {
            name: "Blogs",
            description: "Endpoints for managing blogs"
        },
        {
            name: "Comments",
            description: "Endpoints for managing blog comments"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    }
}

const options = {
    swaggerDefinition,
    apis: [
        "./src/features/code-push/blog.route.js",
        "./src/features/comments/comment.route.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec