const express = require('express');
const router = express.Router();
const Push = require('../models/Push.model');
const { generateCommitMessage, generatePRDescription } = require('../lib/gemini');

router.post("/execute", async (req, res) => {
  try {
    const { files, cwd } = req.body;

    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ message: "No files provided" });
    }

    const [commitMessage, prDescription] = await Promise.all([
      generateCommitMessage(files),
      generatePRDescription(files),
    ]);

    const push = await Push.create({ files, cwd, commitMessage, prDescription });

    return res.status(201).json({
      message: "Code pushed successfully",
      push: {
        id: push._id,
        commitMessage,
        prDescription,
        fileCount: Object.keys(files).length,
      },
    });
  } catch (error) {
    console.error("Push error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
