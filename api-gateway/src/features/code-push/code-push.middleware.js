const validatePush = (req, res, next) => {
  const { files } = req.body;

  if (!files || Object.keys(files).length === 0) {
    return res.status(400).json({ message: "No files provided" });
  }

  for (const [path, content] of Object.entries(files)) {
    if (typeof content !== 'string') {
      return res.status(400).json({ message: `Invalid content for file: ${path}` });
    }
  }

  next();
};

module.exports = validatePush;
