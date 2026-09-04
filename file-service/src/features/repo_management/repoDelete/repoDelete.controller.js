const RepoDesign = require("../repoDesign.model")

const deleteRepo = async (req, res) => {
    try {
        const { userId, mainFileName, subFileName } = req.body

        if (subFileName) {
            const subFilter = {
                ownerId: userId,
                main_url: mainFileName,
                'collections_files.sub_url': subFileName,
            }

            const result = await RepoDesign.bulkWrite([
                {
                    deleteOne: {
                        filter: { ...subFilter, collections_files: { $size: 1 } }
                    }
                },
                {
                    updateOne: {
                        filter: subFilter,
                        update: { $pull: { collections_files: { sub_url: subFileName } } }
                    }
                }
            ])

            if (result.deletedCount === 1) {
                return res.status(200).json({
                    success: true,
                    message: `Repo '${mainFileName}' deleted successfully`
                })
            }

            if (result.modifiedCount === 1) {
                return res.status(200).json({
                    success: true,
                    message: `Sub file '${subFileName}' deleted successfully`
                })
            }

            return res.status(404).json({
                success: false,
                message: "Repo or sub file not found"
            })
        }

        const deleted = await RepoDesign.findOneAndDelete({ ownerId: userId, main_url: mainFileName })
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Repo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: `Repo '${mainFileName}' deleted successfully`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = { deleteRepo }