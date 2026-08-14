const blogcontroller = require("./blog.controller");
const { Router } = require("express");

const router = Router();

router.post("/", blogcontroller.createblog);
router.get("/", blogcontroller.getblogs);
router.get("/:id", blogcontroller.getblog);
router.patch("/:id", blogcontroller.updateblog);
router.delete("/:id", blogcontroller.deleteblog);

module.exports = router;