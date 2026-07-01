const Workspace = require("../models/workspace.model");
// sluggify
const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/--+/g, "-");

const randomSuffix = () => Math.random().toString(36).slice(2, 8);

const generateConnectionString = (title) =>
  `${randomSuffix()}`;

const formatResponse = (workspace) => {
  const obj = workspace.toObject();

  if (!obj.subtitle?.length) {
    delete obj.subtitle;
  }

  return obj;
};
// CREATE SUBTITLE AND WORKSPACE  
const create = async (req, res) => {
  try {
    const { title, subtitle, connectionString, code } = req.body;

    // Create Workspace
    if (title?.trim() && !connectionString) {
      const workspace = await Workspace.create({
        title: {
          name: title.trim(),
          connectionString: generateConnectionString(title),
          titleCode: {},
          useTitleCode: true,
        },
        subtitle: [],
      });

      return res.status(201).json({
        message: "Workspace created successfully",
        ...formatResponse(workspace),
      });
    }

    // Create Subtitle
    if (!connectionString) {
      return res.status(400).json({
        message: "connectionString is required",
      });
    }

    if (!subtitle?.trim()) {
      return res.status(400).json({
        message: "Subtitle is required",
      });
    }

    const workspace = await Workspace.findOne({
      "title.connectionString": connectionString,
    });

    if (!workspace) {
      return res.status(404).json({
        message: "Workspace not found",
      });
    }

    workspace.subtitle.push({
      name: subtitle.trim(),
      code: code || {},
      subConnectionString: `${workspace.title.connectionString}-${slugify(subtitle)}`,
    });

    workspace.title.useTitleCode = false;

    await workspace.save();

    return res.status(201).json({
      message: "Subtitle created successfully",
      ...formatResponse(workspace),
    });
  } catch (error) {
    console.error("create error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// GET ALL WORKSPACES
const getTitles = async (req, res) => {
  try {
    const workspaces = await Workspace.find().sort({ createdAt: -1 });

    return res.status(200).json({
      workspaces: workspaces.map(formatResponse),
    });
  } catch (error) {
    console.error("getTitles error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


module.exports = {
  create,
  getTitles,
};