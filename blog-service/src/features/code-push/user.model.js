const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
