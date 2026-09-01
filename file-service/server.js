const dotenv = require('dotenv')
dotenv.config({quiet: true})
const app = require('./src/app')
const port = process.env.PORT || 8011
const connectDb = require('./src/lib/mongoDb')

app.listen(port, async() => {
  try {
    await connectDb();
    console.log(`File service is running on port ${port}`)
  } catch (error) {
    console.log(error)
  }
})