require('dotenv').config({ quiet: true })
const app = require("./src/app")
const connectDb = require("./src/lib/mongoDb")

connectDb()
const PORT = process.env.PORT || 8010

const server = app.listen(PORT, () => {
    console.log(`Blog service is running on port ${PORT}`)
})