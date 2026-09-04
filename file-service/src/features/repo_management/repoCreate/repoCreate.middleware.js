const mongoose = require("mongoose")

const validateCreateRepo = (req, res, next) => {
    const { userId, mainFileName } = req.body

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

    if (!mainFileName) {
        return res.status(400).json({
            success: false,
            message: "Main file name is required"
        })
    }

    next()
}

module.exports = { validateCreateRepo }
