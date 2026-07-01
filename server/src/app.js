const express = require('express')
const cors = require('cors')
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
app.use(express.urlencoded({extended:true}))


// routers





module.exports = app