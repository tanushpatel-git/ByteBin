const swaggerJSDoc = require("swagger-jsdoc")

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "ByteBin API Gateway",
        version: "1.0.0",
        description: "Common entry point (API Gateway) for all ByteBin microservices. Proxies requests to blog-service, llms-service, and file-service."
    },
    servers: [
        {
            url: "http://localhost:8008",
            description: "API Gateway (common entry point)"
        }
    ],
    tags: [
        {
            name: "Blogs",
            description: "Blog CRUD operations (proxied to blog-service)"
        },
        {
            name: "Comments",
            description: "Blog comments operations (proxied to blog-service)"
        },
        {
            name: "Code",
            description: "Code push and update operations (proxied to llms-service)"
        },
        {
            name: "Repo Management",
            description: "Repo management operations (proxied to file-service)"
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
    apis: ["./src/features/swagger/swagger.docs.js"]
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec