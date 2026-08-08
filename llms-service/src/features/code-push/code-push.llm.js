const axios = require('axios');
const { TIMEOUTS } = require('../../lib/timeout');

function withTimeout(ms = TIMEOUTS.llm) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, [Symbol.dispose]() { clearTimeout(timer); } };
}

function getProviders() {
  return [
    {
      name: 'Gemini',
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
      key: process.env.GEMINI_API_KEY,
      format: 'gemini',
    },
    {
      name: 'Groq',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      key: process.env.GROQ_API_KEY,
      model: 'llama-3.3-70b-versatile',
      format: 'openai',
    },
  ];
}

async function callGemini(provider, prompt) {
  const timeout = withTimeout();
  try {
    const res = await axios.post(provider.url, {
      contents: [{ parts: [{ text: prompt }] }],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': provider.key,
      },
      signal: timeout.signal,
    });

    return res.data.candidates[0].content.parts[0].text.trim();
  } catch (err) {
    if (err.response) {
      throw new Error(`${provider.name} error ${err.response.status}: ${JSON.stringify(err.response.data)}`);
    }
    throw new Error(`${provider.name} error: ${err.message}`);
  } finally {
    timeout[Symbol.dispose]();
  }
}

async function callOpenAI(provider, prompt) {
  const timeout = withTimeout();
  try {
    const res = await axios.post(provider.url, {
      model: provider.model,
      messages: [{ role: 'user', content: prompt }],
    }, {
      headers: {
        Authorization: `Bearer ${provider.key}`,
        'Content-Type': 'application/json',
      },
      signal: timeout.signal,
    });

    return res.data.choices[0].message.content.trim();
  } catch (err) {
    if (err.response) {
      throw new Error(`${provider.name} error ${err.response.status}: ${JSON.stringify(err.response.data)}`);
    }
    throw new Error(`${provider.name} error: ${err.message}`);
  } finally {
    timeout[Symbol.dispose]();
  }
}

async function callWithFallback(prompt) {
  const errors = [];

  for (const provider of getProviders()) {
    if (!provider.key) {
      console.log(`[LLM] Skipping ${provider.name} — no API key configured`);
      continue;
    }

    try {
      const result =
        provider.format === 'gemini'
          ? await callGemini(provider, prompt)
          : await callOpenAI(provider, prompt);
      return result;
    } catch (err) {
      console.error(`[LLM] ${provider.name} failed: ${err.message}`);
      errors.push(`${provider.name}: ${err.message}`);
    }
  }

  throw new Error(`All LLM providers failed:\n${errors.join('\n')}`);
}

async function generateCommitMessage(files) {
  const fileList = Object.entries(files)
    .map(([path, content]) => `File: ${path}\n\n${content.slice(0, 2000)}`)
    .join('\n\n---\n\n');

  const prompt = `You are a developer reviewing a code push. Based on the following files and their contents, write a concise, conventional commit message (e.g., "feat: add user authentication", "fix: resolve api timeout", "refactor: extract validation logic").

Files:\n\n${fileList}\n\n---\n\nCommit message:`;

  return callWithFallback(prompt);
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

  return callWithFallback(prompt);
}

module.exports = { generateCommitMessage, generatePRDescription };
