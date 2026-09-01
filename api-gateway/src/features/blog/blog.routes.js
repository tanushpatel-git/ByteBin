const express = require("express");
const router = express.Router();

const {
    createblog,
    getblogs,
    getblog,
    updateblog,
    deleteblog,
} = require("./blog.controller");



router.post("/", createblog);      // no need for authentication 
router.get("/", getblogs);           // no need for authentication
router.get("/:id", getblog);           // no need for authentication
router.patch("/:id", updateblog);       // need for authentication
router.delete("/:id", deleteblog);     // need for authentication

module.exports = router;     