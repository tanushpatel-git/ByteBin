const dns = require("dns")
const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URI){
            throw new Error("Please provide MongoDB URI")
        }
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error connecting to database")
        throw error
    }
}

module.exports = connectDb 