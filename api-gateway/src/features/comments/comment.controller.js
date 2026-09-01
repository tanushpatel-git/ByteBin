const axios = require("axios");

const BLOG_SERVICE_URL =
    process.env.BLOG_SERVICE_URL || "http://localhost:8010";

const createComment = async (req, res) => {
    try {
        const { blogId } = req.params;
        const upstream = await axios.post(
            `${BLOG_SERVICE_URL}/api/comments/${blogId}`,
            req.body,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Comment create proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getComments = async (req, res) => {
    try {
        const { blogId } = req.params;
        const upstream = await axios.get(
            `${BLOG_SERVICE_URL}/api/comments/${blogId}`,
            {
                params: req.query,
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Comment get proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const upstream = await axios.patch(
            `${BLOG_SERVICE_URL}/api/comments/${commentId}`,
            req.body,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Comment update proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const upstream = await axios.delete(
            `${BLOG_SERVICE_URL}/api/comments/${commentId}`,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Comment delete proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
};
