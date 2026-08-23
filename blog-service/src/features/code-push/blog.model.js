const mongoose = require("mongoose");
require("./user.model");

const BlogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
            maxlength:200
        },
        content:{
            type:String,
            required:true
        },
           coverImage: {
            type: String,
            trim: true
        },
        author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
     status: {
      type: String,
      enum: ["draft", "published", "unpublished"],
      default: "draft",
    },
    views: {
    type: Number,
    default: 0,
    min: 0
},
publishedAt: {
    type: Date,
    default: null
}
},   
    {timestamps: true}
)
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;