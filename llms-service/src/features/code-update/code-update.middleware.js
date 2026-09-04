const mongoose = require('mongoose');

const validateUpdate = (req, res, next) => {
  const { userId, id, files, cwd, mainFileName, commitMessage, prDescription } = req.body;
  const ownerId = userId || id;

  if (!ownerId) {
    return res.status(400).json({ message: "User id is required" });
  }

  if (!mongoose.Types.ObjectId.isValid(ownerId)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  const mainFile = mainFileName ?? (cwd ? cwd.split('/')[1] : '');
  if (!mainFile) {
    return res.status(400).json({ message: "mainFileName or cwd is required" });
  }

  if (files !== undefined) {
    if (typeof files !== 'object' || Array.isArray(files) || Object.keys(files).length === 0) {
      return res.status(400).json({ message: "No files provided" });
    }

    for (const [path, content] of Object.entries(files)) {
      if (typeof content !== 'string') {
        return res.status(400).json({ message: `Invalid content for file: ${path}` });
      }
    }
  }

  if (cwd !== undefined && typeof cwd !== 'string') {
    return res.status(400).json({ message: "Invalid cwd" });
  }

  if (commitMessage !== undefined && typeof commitMessage !== 'string') {
    return res.status(400).json({ message: "Invalid commitMessage" });
  }

  if (prDescription !== undefined && typeof prDescription !== 'string') {
    return res.status(400).json({ message: "Invalid prDescription" });
  }

  const hasChanges =
    files !== undefined ||
    cwd !== undefined ||
    commitMessage !== undefined ||
    prDescription !== undefined;

  if (!hasChanges) {
    return res.status(400).json({ message: "Nothing to update" });
  }

  next();
};

module.exports = { validateUpdate };