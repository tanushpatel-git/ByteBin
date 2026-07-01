const express = require('express')
const cors = require('cors')
const app = express()
// Cors setup 
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    methods:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:["Content-Type", "Authorization"],
}))


// json middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routers





module.exports = app