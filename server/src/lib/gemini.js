const { GoogleGenerativeAI } = require('@google/generative-ai');

function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is required');
  }
  return new GoogleGenerativeAI(apiKey);
}

function getModel(modelName = 'gemini-3.5-flash') {
  return getGenAI().getGenerativeModel({ model: modelName });
}

async function generateCommitMessage(files) {
  const fileList = Object.entries(files)
    .map(([path, content]) => `File: ${path}\n\n${content.slice(0, 2000)}`)
    .join('\n\n---\n\n');

  const prompt = `You are a developer reviewing a code push. Based on the following files and their contents, write a concise, conventional commit message (e.g., "feat: add user authentication", "fix: resolve api timeout", "refactor: extract validation logic").

Files:\n\n${fileList}\n\n---\n\nCommit message:`;

  const model = getModel();
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}

async function generatePRDescription(files) {
  const fileList = Object.entries(files)
    .map(([path, content]) => `File: ${path}\n\n${content.slice(0, 2000)}`)
    .join('\n\n---\n\n');

  const prompt = `You are a developer reviewing a code push. Based on the following files and their contents, write a pull request description. Include:
1. A summary of the changes
2. Key files modified and what changed in each
3. The purpose or motivation behind the changes

Files:\n\n${fileList}\n\n---\n\nPull Request Description:`;

  const model = getModel();
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}

module.exports = { generateCommitMessage, generatePRDescription };
