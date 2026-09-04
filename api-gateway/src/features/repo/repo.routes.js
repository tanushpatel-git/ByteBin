const express = require("express");
const router = express.Router();

const {
    createRepo,
    getRepoByCommits,
    getAllRepos,
    deleteRepo,
} = require("./repo.controller");

router.post("/createRepo", createRepo);
router.put("/getRepoByCommits/:userId", getRepoByCommits);
router.get("/getAllRepos/:userId", getAllRepos);
router.post("/deleteRepo", deleteRepo);

module.exports = router;