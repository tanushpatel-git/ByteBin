const { generateCommitMessage, generatePRDescription } = require('./code-push.llm');
const RepoDesign = require('../../model/repoDesign.model');

const executePush = async (req, res) => {
  try {
    const { userId, id, files, cwd, mainFileName: main, subFileName: sub } = req.body;
    const ownerId = userId || id;
    const mainFileName = main ?? (cwd ? cwd.split('/')[1] : '');
    const subFileName = sub ?? undefined;

    let commitMessage = 'Update code files';
    let prDescription = 'Automated code push.';

    try {
      commitMessage = (await generateCommitMessage(files)) || commitMessage;
      prDescription = (await generatePRDescription(files)) || prDescription;
    } catch (llmError) {
      console.error('[Push] LLM unavailable, using fallback text:', llmError.message);
    }

    let repo;
    let missing;

    if (subFileName) {
      repo = await RepoDesign.findOneAndUpdate(
        { ownerId, main_url: mainFileName, 'collections_files.sub_url': subFileName },
        {
          $set: {
            'collections_files.$.files': files,
            'collections_files.$.cwd': cwd || '',
            'collections_files.$.commitMessage': commitMessage,
            'collections_files.$.prDescription': prDescription,
          }
        },
        { new: true }
      );
      missing = `Repo not found for main file: ${mainFileName} and sub file: ${subFileName}`;
    } else {
      repo = await RepoDesign.findOneAndUpdate(
        { ownerId, main_url: mainFileName },
        {
          $set: {
            files,
            cwd: cwd || '',
            commitMessage,
            prDescription,
          }
        },
        { new: true }
      );
      missing = `Repo not found for main file: ${mainFileName}`;
    }

    if (!repo) {
      return res.status(404).json({ message: missing });
    }

    return res.status(201).json({
      message: "Code pushed successfully",
      push: {
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
