const express = require('express')
const cors = require('cors')
const codePush = require('./features/code-push/code-push.route')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser());

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
app.use('/api/push' , codePush);

module.exports = app