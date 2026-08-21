const blogcontroller = require("./blog.controller");
const { Router } = require("express");
const authMiddleware=require("./auth.middleware")
const router = Router();

router.post("/", authMiddleware, blogcontroller.createblog);
router.get("/", authMiddleware, blogcontroller.getblogs);
router.get("/:id", authMiddleware, blogcontroller.getblog);
router.patch("/:id", authMiddleware, blogcontroller.updateblog);
router.delete("/:id", authMiddleware, blogcontroller.deleteblog);
module.exports = router;    