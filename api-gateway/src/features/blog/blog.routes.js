const express = require("express");
const router = express.Router();

const {
    createblog,
    getblogs,
    getblog,
    updateblog,
    deleteblog,
} = require("./blog.controller");

const forwardAuth = require("./forwardAuth");

router.post("/", forwardAuth, createblog);
router.get("/", forwardAuth, getblogs);
router.get("/:id", forwardAuth, getblog);
router.patch("/:id", forwardAuth, updateblog);
router.delete("/:id", forwardAuth, deleteblog);

module.exports = router;