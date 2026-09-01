const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('uploads'))

app.use(cors({
    origin: process.env.API_GATEWAY_URL,
    credentials: true,
}))
module.exports = app