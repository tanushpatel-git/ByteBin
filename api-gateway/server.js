const express = require("express")
const app = require("./src/app")
require('dotenv').config({ quiet: true })

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})