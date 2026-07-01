const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://imgs.search.brave.com/SlAHcvHF1G6DX8aNn-45OSpTEyTI2Zy4Mr-DzvMrOyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk3LzM4/L2JkLzk3MzhiZGQy/NjU4YWY2MzczODdk/ZDUxNDRlM2FjNTI4/LmpwZw"
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        enum: ["merchant", "navy", "coast"],
        default: "coast"
    },
    navyCode: {
        type: String
    },
    merchantCode: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true })
const UserSchema = mongoose.model("User", userModel);
module.exports = UserSchema; 