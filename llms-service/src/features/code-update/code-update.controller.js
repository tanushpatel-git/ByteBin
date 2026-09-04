const { generateCommitMessage, generatePRDescription } = require('../code-push/code-push.llm');
const RepoDesign = require('../../model/repoDesign.model');

const FALLBACK_COMMIT_MESSAGE = 'Update code files';
const FALLBACK_PR_DESCRIPTION = 'Automated code update.';

const executeUpdate = async (req, res) => {
  try {
    const {
      userId,
      id,
      files,
      cwd,
      mainFileName: main,
      subFileName: sub,
      commitMessage,
      prDescription,
    } = req.body;
    const ownerId = userId || id;
    const mainFileName = main ?? (cwd ? cwd.split('/')[1] : '');
    const subFileName = sub ?? undefined;

    let newCommitMessage = commitMessage;
    let newPRDescription = prDescription;

    if (files && Object.keys(files).length > 0) {
      try {
        newCommitMessage = newCommitMessage || (await generateCommitMessage(files)) || FALLBACK_COMMIT_MESSAGE;
        newPRDescription = newPRDescription || (await generatePRDescription(files)) || FALLBACK_PR_DESCRIPTION;
      } catch (llmError) {
        console.error('[Update] LLM unavailable, using fallback text:', llmError.message);
        newCommitMessage = newCommitMessage || FALLBACK_COMMIT_MESSAGE;
        newPRDescription = newPRDescription || FALLBACK_PR_DESCRIPTION;
      }
    }

    const set = {};

    if (subFileName) {
      if (files !== undefined) set['collections_files.$.files'] = files;
      if (cwd !== undefined) set['collections_files.$.cwd'] = cwd;
      if (newCommitMessage) set['collections_files.$.commitMessage'] = newCommitMessage;
      if (newPRDescription) set['collections_files.$.prDescription'] = newPRDescription;
    } else {
      if (files !== undefined) set.files = files;
      if (cwd !== undefined) set.cwd = cwd;
      if (newCommitMessage) set.commitMessage = newCommitMessage;
      if (newPRDescription) set.prDescription = newPRDescription;
    }

    const isSub = subFileName !== undefined;
    const filter = isSub
      ? { ownerId, main_url: mainFileName, 'collections_files.sub_url': subFileName }
      : { ownerId, main_url: mainFileName };

    const repo = await RepoDesign.findOneAndUpdate(filter, { $set: set }, { new: true });

    if (!repo) {
      const missing = isSub
        ? `Repo not found for main file: ${mainFileName} and sub file: ${subFileName}`
        : `Repo not found for main file: ${mainFileName}`;
      return res.status(404).json({ message: missing });
    }

    return res.status(200).json({
      message: 'Code updated successfully',
      update: {
        commitMessage: newCommitMessage || null,
        prDescription: newPRDescription || null,
        fileCount: files && typeof files === 'object' ? Object.keys(files).length : 0,
      },
    });
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { executeUpdate };