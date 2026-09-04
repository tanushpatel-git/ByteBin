const mongoose = require('mongoose');

const validatePush = (req, res, next) => {
  const { userId, id, files } = req.body;
  const ownerId = userId || id;

  if (!ownerId) {
    return res.status(400).json({ message: "User id is required" });
  }

  if (!mongoose.Types.ObjectId.isValid(ownerId)) {
    return res.status(400).json({ message: "Invalid user id" });
  }


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

module.exports = { validatePush };
