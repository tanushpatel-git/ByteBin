const axios = require('axios');

const LLMS_SERVICE_URL = process.env.LLMS_SERVICE_URL || 'http://localhost:8009';
const INTERNAL_TIMEOUT_MS = 150 * 1000;

const executePush = async (req, res) => {
  try {
    const upstream = await axios.post(`${LLMS_SERVICE_URL}/api/push/execute`, req.body, {
      validateStatus: () => true,
      timeout: INTERNAL_TIMEOUT_MS,
    });

    return res.status(upstream.status).json(upstream.data);
  } catch (error) {
    console.error("Push proxy error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { executePush };
