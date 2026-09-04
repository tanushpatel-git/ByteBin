const express = require("express");
const router = express.Router();

const { executeUpdate } = require("./code-update.controller");
const validateUpdate = require("./code-update.middleware");

router.put("/execute", validateUpdate, executeUpdate);

module.exports = router;