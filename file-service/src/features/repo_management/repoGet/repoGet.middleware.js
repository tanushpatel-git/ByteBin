const mongoose = require("mongoose")

const validateGetRepoByCommits = (req, res, next) => {
    const { userId } = req.params
    const { search } = req.body

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "User id is required"
        })
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user id"
        })
    }

    if (search !== undefined && typeof search !== "string") {
        return res.status(400).json({
            success: false,
            message: "Search must be a string"
        })
    }

    next()
}

const validateGetAllRepos = (req, res, next) => {
    const { userId } = req.params

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "User id is required"
        })
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid user id"
        })
    }

    next()
}

module.exports = { validateGetRepoByCommits, validateGetAllRepos }