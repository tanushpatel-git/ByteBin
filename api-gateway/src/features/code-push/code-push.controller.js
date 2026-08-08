const axios = require('axios');

const LLMS_SERVICE_URL = process.env.LLMS_SERVICE_URL || 'http://localhost:8009';

const executePush = async (req, res) => {
  try {
    const upstream = await axios.post(`${LLMS_SERVICE_URL}/api/push/execute`, req.body, {
      validateStatus: () => true,
    });

    return res.status(upstream.status).json(upstream.data);
  } catch (error) {
    console.error("Push proxy error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { executePush };
