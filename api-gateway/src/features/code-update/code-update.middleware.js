const validateUpdate = (req, res, next) => {
  const { files, cwd, mainFileName, commitMessage, prDescription } = req.body;

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

module.exports = validateUpdate;