const axios = require('axios');

const LLMS_SERVICE_URL = process.env.LLMS_SERVICE_URL || 'http://localhost:8009';
const INTERNAL_TIMEOUT_MS = 150 * 1000;

const executeUpdate = async (req, res) => {
  try {
    const upstream = await axios.put(`${LLMS_SERVICE_URL}/api/update/execute`, req.body, {
      validateStatus: () => true,
      timeout: INTERNAL_TIMEOUT_MS,
    });

    return res.status(upstream.status).json(upstream.data);
  } catch (error) {
    console.error('Update proxy error:', error.response ? error.response.data : error.message);

    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'Internal server error';

    console.log('Update proxy error:', errorMessage);

    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { executeUpdate };