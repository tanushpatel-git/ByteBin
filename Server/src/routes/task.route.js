const express = require("express");
const router = express.Router();

const {create,getTitles} = require("../controllers/workspace.controller");

router.get("/titles", getTitles);
router.post("/create-task", create);

module.exports = router;