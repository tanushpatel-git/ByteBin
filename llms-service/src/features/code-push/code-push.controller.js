const Push = require('./code-push.model');
const { generateCommitMessage, generatePRDescription } = require('./code-push.llm');

const executePush = async (req, res) => {
  try {
    const { files, cwd, id } = req.body;

    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ message: "No files provided" });
    }

    for (const [path, content] of Object.entries(files)) {
      if (typeof content !== 'string') {
        return res.status(400).json({ message: `Invalid content for file: ${path}` });
      }
    }

    const commitMessage = await generateCommitMessage(files);
    const prDescription = await generatePRDescription(files);

    const push = await Push.create({ files, cwd, pushId: id, commitMessage, prDescription });

    return res.status(201).json({
      message: "Code pushed successfully",
      push: {
        id: push._id,
        pushId: push.pushId,
        commitMessage,
        prDescription,
        fileCount: Object.keys(files).length,
      },
    });
  } catch (error) {
    console.error("Push error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { executePush };
