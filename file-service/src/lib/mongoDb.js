const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URI){
            throw new Error("Please provide MongoDB URI")
        }
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error connecting to database")
        throw new error
    }
}

module.exports = connectDb