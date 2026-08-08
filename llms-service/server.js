const app = require("./src/app")
require('dotenv').config({ quiet: true })
const connectDb = require("./src/lib/mongoDb")

connectDb()
const PORT = process.env.PORT || 8009

app.listen(PORT, () => {
    console.log(`LLMs service is running on port ${PORT}`)
})