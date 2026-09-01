const mongoose = require('mongoose');
const Comment = require('./comment.model');
const Blog = require('../code-push/blog.model');

 
const MAX_CONTENT_LENGTH = Comment.MAX_CONTENT_LENGTH || 1000;
const COMMENTS_PER_PAGE = 10;
 
const createComment = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { content } = req.body;
 
        if (!mongoose.Types.ObjectId.isValid(blogId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid blog id',
            });
        }
 
        if (!content || !content.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Comment content is required',
            });
        }
 
        if (content.length > MAX_CONTENT_LENGTH) {
            return res.status(400).json({
                success: false,
                message: `Comment cannot exceed ${MAX_CONTENT_LENGTH} characters`,
            });
        }
 
        const blogExists = await Blog.exists({ _id: blogId });
 
        if (!blogExists) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
 
        const comment = await Comment.create({
            blog: blogId,
            content: content.trim(),
            author: req.user._id,
        });
 
        await comment.populate('author', 'name');
 
        return res.status(201).json({
            success: true,
            message: 'Comment created successfully',
            comment,
        });
    } catch (error) {
        console.error('createComment error:', error);
 
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
 
const getComments = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { cursor } = req.query;
 
        if (!mongoose.Types.ObjectId.isValid(blogId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid blog id',
            });
        }
 
        const query = { blog: blogId };
 
        if (cursor) {
            if (!mongoose.Types.ObjectId.isValid(cursor)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid cursor',
                });
            }
 
            query._id = { $lt: cursor }; //$lt is used for less than so id gets less and assign it 
        }
 
        const comments = await Comment.find(query)
            .sort({ _id: -1 })
            .limit(COMMENTS_PER_PAGE + 1)
            .populate('author', 'name');
 
        const hasMore = comments.length > COMMENTS_PER_PAGE;
 
        if (hasMore) {
            comments.pop();
        }
 
        const nextCursor = hasMore
            ? comments[comments.length - 1]._id.toString()
            : null;
 
        return res.status(200).json({
            success: true,
            comments,
            nextCursor,
            hasMore,
        });
    } catch (error) {
        console.error('getComments error:', error);
 
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid comment id',
            });
        }

        if (!content || !content.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Comment content is required',
            });
        }

        if (content.length > MAX_CONTENT_LENGTH) {
            return res.status(400).json({
                success: false,
                message: `Comment cannot exceed ${MAX_CONTENT_LENGTH} characters`,
            });
        }

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found',
            });
        }

        if (comment.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to update this comment',
            });
        }

        comment.content = content.trim();
        await comment.save();
        await comment.populate('author', 'name');

        return res.status(200).json({
            success: true,
            message: 'Comment updated successfully',
            comment,
        });
    } catch (error) {
        console.error('updateComment error:', error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid comment id',
            });
        }

        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found',
            });
        }

        if (comment.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to delete this comment',
            });
        }

        await Comment.findByIdAndDelete(commentId);

        return res.status(200).json({
            success: true,
            message: 'Comment deleted successfully',
        });
    } catch (error) {
        console.error('deleteComment error:', error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
 
module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
};