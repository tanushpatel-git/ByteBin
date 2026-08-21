require('dotenv').config({ quiet: true })
const express = require("express")
const app = require("./src/app")

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})