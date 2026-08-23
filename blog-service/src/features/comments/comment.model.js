const mongoose = require("mongoose");
const MAX_CONTENT_LENGTH = 1000;

const CommentSchema = new mongoose.Schema(
    {
        blog: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Blog",
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },

        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: MAX_CONTENT_LENGTH,
        },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", CommentSchema);

Comment.MAX_CONTENT_LENGTH = MAX_CONTENT_LENGTH;

module.exports = Comment;