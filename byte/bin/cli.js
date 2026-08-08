#!/usr/bin/env node

import {
  readdirSync,
  readFileSync,
  existsSync,
  statSync,
  writeFileSync,
  mkdirSync,
} from "node:fs";

import { join, relative, dirname } from "node:path";

import { execSync } from "node:child_process";

import { homedir } from "node:os";

import axios from "axios";


// ===============================
// Constants
// ===============================

const DEFAULT_API_URL =
  "http://localhost:8008/api/push/execute";

const DEFAULT_FRONTEND_URL =
  "http://localhost:3000";

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  ".pnp",
  ".yarn",
  "coverage",
  "out",
  "build",
  ".vercel",
]);

const IGNORED_FILE_PATTERNS = [
  name => name === ".DS_Store",
  name => name === "next-env.d.ts",
  name => name === ".env",
  name => name.startsWith(".env."),
  name => name.endsWith(".pem"),
  name => name.endsWith(".tsbuildinfo"),
  name => name.startsWith(".pnp."),
  name => name.startsWith("npm-debug.log"),
  name => name.startsWith("yarn-debug.log"),
  name => name.startsWith("yarn-error.log"),
  name => name.startsWith(".pnpm-debug.log"),
];

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB limit per file


// ===============================
// Parse CLI Arguments
// ===============================

function parseArgs() {
  const args = process.argv.slice(2);

  const command = args[0];

  const extra = {};

  const positional = [];

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];

    if (!arg.startsWith("--")) {
      positional.push(arg);
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
    positional,
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

    console.log(`Opened ${url}`);

  } catch {

    console.error(
      "Failed to open browser."
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
      ".byterc.json"
    ),

    join(
      homedir(),
      ".byterc.json"
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


    // Ignore by file name/pattern

    if (
      IGNORED_FILE_PATTERNS.some(
        fn => fn(entry.name)
      )
    ) {

      continue;

    }


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


    // Recurse into other directories

    if (entry.isDirectory()) {

      walkFiles(
        fullPath,
        baseDir,
        files
      );

      continue;

    }


    // Check file size before reading

    try {

      const stats = statSync(fullPath);

      if (stats.size > MAX_FILE_SIZE_BYTES) {
        console.error(
          `Error: '${entry.name}' exceeds the ${MAX_FILE_SIZE_BYTES / (1024 * 1024)} MB file size limit (${(stats.size / (1024 * 1024)).toFixed(2)} MB).`
        );
        process.exit(1);
      }

    }

    catch {

      // Skip if we can't stat

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
// Staging
// ===============================

const STAGING_DIR = ".byte";
const STAGING_FILE = "index.json";

function getStagingPath() {
  return join(process.cwd(), STAGING_DIR, STAGING_FILE);
}

function addCommand(paths) {
  const baseDir = process.cwd();

  if (paths.length === 0) {
    console.error("Usage: byte add <path> [<path> ...]");
    console.error("       byte add .");
    process.exit(1);
  }

  let staged = [];

  if (paths.length === 1 && paths[0] === ".") {
    staged = Object.keys(
      walkFiles(baseDir, baseDir)
    );
  } else {
    for (const p of paths) {
      const fullPath = join(baseDir, p);

      if (!existsSync(fullPath)) {
        console.error(
          `Error: '${p}' does not exist`
        );
        process.exit(1);
      }

      const stats = statSync(fullPath);

      if (stats.isDirectory()) {
        staged.push(
          ...Object.keys(
            walkFiles(
              fullPath,
              baseDir
            )
          )
        );
      } else {
        if (
          IGNORED_FILE_PATTERNS.some(
            fn => fn(p)
          )
        ) {
          console.warn(
            `Warning: '${p}' is ignored, skipping`
          );
          continue;
        }

        if (
          stats.size >
          MAX_FILE_SIZE_BYTES
        ) {
          console.error(
            `Error: '${p}' exceeds the ${MAX_FILE_SIZE_BYTES / (1024 * 1024)} MB file size limit`
          );
          process.exit(1);
        }

        const relPath = relative(
          baseDir,
          fullPath
        );

        try {
          readFileSync(
            fullPath,
            "utf8"
          );
          staged.push(relPath);
        } catch {
          console.warn(
            `Warning: '${p}' is not a readable text file, skipping`
          );
        }
      }
    }
  }

  if (staged.length === 0) {
    console.log("No files staged.");
    return;
  }

  const stagingPath = getStagingPath();
  mkdirSync(dirname(stagingPath), { recursive: true });

  writeFileSync(
    stagingPath,
    JSON.stringify(
      { files: staged },
      null,
      2
    )
  );

  console.log(
    `Staged ${staged.length} file(s)`
  );
}


// ===============================
// Push Code
// ===============================

async function pushCode(extra) {

  const stagingPath =
    getStagingPath();

  if (
    !existsSync(stagingPath)
  ) {

    console.error(
      "No files staged."
    );

    console.error(
      "Run 'byte add .' to stage all files, or 'byte add <path>' to stage specific files."
    );

    process.exit(1);

  }

  const staging =
    readJson(stagingPath);

  if (
    !staging ||
    !Array.isArray(
      staging.files
    ) ||
    staging.files.length === 0
  ) {

    console.error(
      "No files staged."
    );

    console.error(
      "Run 'byte add .' to stage all files."
    );

    process.exit(1);

  }


  const config =
    loadConfig();

  const apiUrl =

    extra.api ||

    process.env.BYTE_API ||

    config.apiUrl ||

    DEFAULT_API_URL;


  const baseDir =
    process.cwd();

  console.log(
    `Pushing code from:\n${baseDir}`
  );

  console.log(
    `API: ${apiUrl}`
  );


  const files = {};

  for (const filePath of
    staging.files
  ) {

    const fullPath =
      join(baseDir, filePath);

    if (
      !existsSync(fullPath)
    ) {

      console.warn(
        `Warning: '${filePath}' no longer exists, skipping`
      );

      continue;

    }

    try {

      const stats =
        statSync(fullPath);

      if (
        stats.size >
        MAX_FILE_SIZE_BYTES
      ) {

        console.warn(
          `Warning: '${filePath}' exceeds size limit, skipping`
        );

        continue;

      }

      files[filePath] =
        readFileSync(
          fullPath,
          "utf8"
        );

    } catch {

      console.warn(
        `Warning: '${filePath}' is not readable, skipping`
      );

    }

  }

  const fileCount =
    Object.keys(files).length;

  if (fileCount === 0) {

    console.log(
      "No files to push."
    );

    return;

  }

  console.log(
    `Pushing ${fileCount} file(s)`
  );


  try {

    const response =
      await axios.post(apiUrl, {

        files,

        cwd: baseDir,

      }, {

        headers: {

          "Content-Type":
            "application/json",

        },

      });


    console.log(
      "Push successful"
    );

  }

  catch (error) {

    console.error(
      "Push failed:"
    );

    console.error(
      error.response
        ? `HTTP ${error.response.status}: ${error.response.statusText}`
        : error.message
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
    "  byte <command> [options]"
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
    "  add ."
  );

  console.log(
    "      Stage all project files"
  );

  console.log("");

  console.log(
    "  add <path> [<path> ...]"
  );

  console.log(
    "      Stage specific files or directories"
  );

  console.log("");

  console.log(
    "  push [--api url]"
  );

  console.log(
    "      Push staged files to backend"
  );

  console.log("");

  console.log(
    "Examples:"
  );

  console.log(
    "byte run"
  );

  console.log(
    "byte add ."
  );

  console.log(
    "byte add src/main.js src/utils.js"
  );

  console.log(
    "byte push"
  );

  console.log(
    "  byte push --api http://localhost:5000/api/push/execute"
  );

  console.log("");

  console.log(
    "Environment Variable:"
  );

  console.log(
    "  BYTE_API=http://localhost:5000/api/push/execute"
  );

  console.log("");

  console.log(
    "Config File (.byterc.json)"
  );

  console.log(`{
  "apiUrl": "http://localhost:5000/api/push/execute"
}`);

  console.log("");

}


// ===============================
// Main
// ===============================

const {
  command,
  extra,
  positional,
} = parseArgs();


switch (command) {

  case "run":

    openBrowser(
      DEFAULT_FRONTEND_URL
    );

    break;


  case "add":

    addCommand(
      positional
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