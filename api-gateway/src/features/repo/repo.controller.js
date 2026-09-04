const axios = require("axios");

const FILE_SERVICE_URL =
    process.env.FILE_SERVICE_URL || "http://localhost:8011";

const createRepo = async (req, res) => {
    try {
        const upstream = await axios.post(
            `${FILE_SERVICE_URL}/api/repo/createRepo`,
            req.body,
            {
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Repo create proxy error:", error.response ? error.response.data : error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getRepoByCommits = async (req, res) => {
    try {
        const { userId } = req.params;

        const upstream = await axios.put(
            `${FILE_SERVICE_URL}/api/repo/getRepoByCommits/${userId}`,
            req.body,
            {
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Repo get by commits proxy error:", error.response ? error.response.data : error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const getAllRepos = async (req, res) => {
    try {
        const { userId } = req.params;

        const upstream = await axios.get(
            `${FILE_SERVICE_URL}/api/repo/getAllRepos/${userId}`,
            {
                params: req.query,
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Repo get all proxy error:", error.response ? error.response.data : error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteRepo = async (req, res) => {
    try {
        const upstream = await axios.post(
            `${FILE_SERVICE_URL}/api/repo/deleteRepo`,
            req.body,
            {
                validateStatus: () => true,
            }
        );

        return res.status(upstream.status).json(upstream.data);
    } catch (error) {
        console.error("Repo delete proxy error:", error.response ? error.response.data : error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    createRepo,
    getRepoByCommits,
    getAllRepos,
    deleteRepo,
};