const DEFAULT_REQUEST_TIMEOUT_MS = 150 * 1000;
const DEFAULT_INTERNAL_TIMEOUT_MS = 150 * 1000;

const getPositiveInt = (envKey, fallback) => {
  const value = Number(process.env[envKey]);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : fallback;
};

const TIMEOUTS = {
  request: getPositiveInt('REQUEST_TIMEOUT_MS', DEFAULT_REQUEST_TIMEOUT_MS),
  internal: getPositiveInt('INTERNAL_TIMEOUT_MS', DEFAULT_INTERNAL_TIMEOUT_MS),
};

const timeoutMiddleware = (ms = TIMEOUTS.request) => (req, res, next) => {
  const timer = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ message: 'Request timed out' });
    }
    res.destroy();
  }, ms);

  res.once('finish', () => clearTimeout(timer));
  next();
};

const applyServerTimeouts = (server, ms = TIMEOUTS.request) => {
  server.requestTimeout = ms;
  server.headersTimeout = ms + 10 * 1000;
  server.timeout = ms;
  server.keepAliveTimeout = Math.min(ms, 5 * 1000);
  return server;
};

module.exports = { TIMEOUTS, timeoutMiddleware, applyServerTimeouts };
