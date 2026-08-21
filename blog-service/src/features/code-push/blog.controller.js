const Blog = require("./blog.model");
const createblog=async(req,res)=>{
    try {
        const{title,content,coverImage,status}=req.body;
        
        const blog = await Blog.create({
            title,
            content,
            coverImage,
            status,
            author: req.user._id
        });
        res.status(201).json({ 
            success: true, 
            message: "Blog created successfully", 
            blog 
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            success: false, 
            message: "Internal Server Error", 
            error: error.message 
        });
    }
}
  
const getblogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            blogs
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
const getblog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } },
            { new: true }
        ).populate("author", "name email");

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
const updateblog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, coverImage, status } = req.body;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this blog"
            });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                title,
                content,
                coverImage,
                status
            },
            {
                new: true,
                runValidators: true //all does not run 
            }
        ).populate("author", "name email");

        return res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog: updatedBlog
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
const deleteblog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this blog"
            });
        }

        await Blog.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
module.exports = {
  createblog,
  getblogs,
 getblog,
 updateblog,
 deleteblog
 
};