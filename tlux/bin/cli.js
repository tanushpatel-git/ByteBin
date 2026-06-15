#!/usr/bin/env node

import {
  readdirSync,
  readFileSync,
  existsSync,
} from "node:fs";

import { join, relative } from "node:path";

import { execSync } from "node:child_process";

import { homedir } from "node:os";


// ===============================
// Constants
// ===============================

const DEFAULT_API_URL =
  "http://localhost:3001/api/push";

const DEFAULT_FRONTEND_URL =
  "http://localhost:5173";

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
]);


// ===============================
// Parse CLI Arguments
// ===============================

function parseArgs() {
  const args = process.argv.slice(2);

  const command = args[0];

  const extra = {};

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];

    if (!arg.startsWith("--")) {
      continue;
    }

    const key = arg.slice(2);

    const value =
      args[i + 1] &&
        !args[i + 1].startsWith("--")
        ? args[++i]
        : true;

    extra[key] = value;
  }

  return {
    command,
    extra,
  };
}


// ===============================
// Open Browser
// ===============================

function openBrowser(url) {
  try {
    switch (process.platform) {

      case "darwin":
        execSync(`open "${url}"`);
        break;

      case "win32":
        execSync(`start "" "${url}"`);
        break;

      default:
        execSync(`xdg-open "${url}"`);
    }

    console.log(`✅ Opened ${url}`);

  } catch {

    console.error(
      "❌ Failed to open browser."
    );

    process.exit(1);
  }
}


// ===============================
// Read JSON File Safely
// ===============================

function readJson(file) {

  try {

    return JSON.parse(
      readFileSync(file, "utf8")
    );

  }

  catch {

    return null;

  }

}


// ===============================
// Load Config
// ===============================

function loadConfig() {

  const configFiles = [

    join(
      process.cwd(),
      ".tluxrc.json"
    ),

    join(
      homedir(),
      ".tluxrc.json"
    ),

  ];

  for (const file of configFiles) {

    if (existsSync(file)) {

      const config =
        readJson(file);

      if (config) {
        return config;
      }

    }

  }

  return {};

}


// ===============================
// Walk Files Recursively
// ===============================

function walkFiles(
  dir,
  baseDir,
  files = {}
) {

  let entries;

  try {

    entries = readdirSync(
      dir,
      {
        withFileTypes: true,
      }
    );

  }

  catch {

    return files;

  }


  for (const entry of entries) {

    const fullPath = join(
      dir,
      entry.name
    );


    // Ignore directories

    if (
      entry.isDirectory() &&
      (
        IGNORED_DIRS.has(
          entry.name
        ) ||

        entry.name.startsWith(".")
      )
    ) {

      continue;

    }


    // Recursive

    if (entry.isDirectory()) {

      walkFiles(
        fullPath,
        baseDir,
        files
      );

      continue;

    }


    // Read file

    try {

      const relativePath =
        relative(
          baseDir,
          fullPath
        );

      files[relativePath] =
        readFileSync(
          fullPath,
          "utf8"
        );

    }

    catch {

      // Ignore binary files

    }

  }

  return files;

}


// ===============================
// Push Code
// ===============================

async function pushCode(extra) {

  const config =
    loadConfig();

  const apiUrl =

    extra.api ||

    process.env.TLUX_API ||

    config.apiUrl ||

    DEFAULT_API_URL;


  const baseDir =
    process.cwd();

  console.log(
    `🚀 Pushing code from:\n${baseDir}`
  );

  console.log(
    `📡 API: ${apiUrl}`
  );


  const files =
    walkFiles(
      baseDir,
      baseDir
    );

  const fileCount =
    Object.keys(files).length;


  if (fileCount === 0) {

    console.log(
      "⚠️ No files found."
    );

    return;

  }


  console.log(
    `📁 Found ${fileCount} files`
  );


  try {

    const response =
      await fetch(apiUrl, {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json",

        },

        body: JSON.stringify({

          files,

          cwd: baseDir,

        }),

      });


    if (!response.ok) {

      throw new Error(

        `HTTP ${response.status}: ${response.statusText}`

      );

    }


    const result =
      await response.json();


    console.log(
      "✅ Push successful"
    );

    console.log(
      JSON.stringify(
        result,
        null,
        2
      )
    );

  }

  catch (error) {

    console.error(
      "❌ Push failed:"
    );

    console.error(
      error.message
    );

    process.exit(1);

  }

}


// ===============================
// Help
// ===============================

function showHelp() {

  console.log("");

  console.log(
    "Usage:"
  );

  console.log(
    "  tlux <command> [options]"
  );

  console.log("");

  console.log(
    "Commands:"
  );

  console.log(
    "  run"
  );

  console.log(
    "      Open frontend in browser"
  );

  console.log("");

  console.log(
    "  push [--api url]"
  );

  console.log(
    "      Push project files to backend"
  );

  console.log("");

  console.log(
    "Examples:"
  );

  console.log(
    "  tlux run"
  );

  console.log(
    "  tlux push"
  );

  console.log(
    "  tlux push --api http://localhost:5000/api/push"
  );

  console.log("");

  console.log(
    "Environment Variable:"
  );

  console.log(
    "  TLUX_API=http://localhost:5000/api/push"
  );

  console.log("");

  console.log(
    "Config File (.tluxrc.json)"
  );

  console.log(`{
  "apiUrl": "http://localhost:5000/api/push"
}`);

  console.log("");

}


// ===============================
// Main
// ===============================

const {
  command,
  extra,
} = parseArgs();


switch (command) {

  case "run":

    openBrowser(
      DEFAULT_FRONTEND_URL
    );

    break;


  case "push":

    await pushCode(
      extra
    );

    break;


  default:

    showHelp();
    process.exit(1);

}