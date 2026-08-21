const axios = require("axios");

const BLOG_SERVICE_URL =
    process.env.BLOG_SERVICE_URL || "http://localhost:8010";

const createblog = async (req, res) => {
    try {
        const upstream = await axios.post(
            `${BLOG_SERVICE_URL}/api/blogs`,
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
        console.error("Blog create proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const getblogs = async (req, res) => {
    try {
        const upstream = await axios.get(
            `${BLOG_SERVICE_URL}/api/blogs`,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Blog get proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const getblog = async (req, res) => {
    try {
        const { id } = req.params;

        const upstream = await axios.get(
            `${BLOG_SERVICE_URL}/api/blogs/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Blog get proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const updateblog = async (req, res) => {
    try {
        const { id } = req.params;

        const upstream = await axios.patch(
            `${BLOG_SERVICE_URL}/api/blogs/${id}`,
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
        console.error("Blog update proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const deleteblog = async (req, res) => {
    try {
        const { id } = req.params;

        const upstream = await axios.delete(
            `${BLOG_SERVICE_URL}/api/blogs/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Blog delete proxy error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
module.exports = {
    createblog,
    getblogs,
    getblog,
    updateblog,
    deleteblog,
};
