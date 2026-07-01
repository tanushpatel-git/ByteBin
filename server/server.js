const express = require("express")
const app = require("./src/app")
require('dotenv').config({ quiet: true })
const connectDb = require("./src/lib/mongoDb")

connectDb()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})