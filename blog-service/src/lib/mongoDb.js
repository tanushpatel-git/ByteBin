const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        const url = process.env.MONGODB_URI;
        if (!url) {
            console.log("want url");
        }
        await mongoose.connect(url);
        console.log("connectmongodb")
    }
    catch (error) {
        console.log(error)

    }
}
module.exports = connectDb; 