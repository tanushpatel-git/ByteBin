const RepoDesign = require("../repoDesign.model")

const createRepo = async (req, res) => {
    const { userId, mainFileName, subFileName, main_description, sub_description } = req.body

    try {
        const baseUrl = `Bytebin/${mainFileName}`
        const titleCode = subFileName ? `${baseUrl}/${subFileName}` : baseUrl

        const filter = {
            ownerId: userId,
            main_url: mainFileName,
            ...(subFileName ? { 'collections_files.sub_url': { $ne: subFileName } } : {}),
        }

        const update = {
            $setOnInsert: {
                ownerId: userId,
                name: mainFileName,
                titleCode,
                main_url: mainFileName,
                main_description: main_description || '',
            },
            ...(subFileName ? {
                $push: {
                    collections_files: {
                        name: subFileName,
                        sub_url: subFileName,
                        description: sub_description || '',
                    }
                }
            } : {}),
        }

        const result = await RepoDesign.updateOne(filter, update, { upsert: true })

        const mainAlreadyExists = !subFileName && result.upsertedCount === 0

        if (mainAlreadyExists) {
            return res.status(409).json({
                success: false,
                message: `Main file '${mainFileName}' already exists. Please use a different name.`
            })
        }

        return res.status(201).json({
            success: true,
            message: "Repo created successfully",
            url: titleCode
        })
    } catch (error) {
        if (error && error.code === 11000 && subFileName) {
            return res.status(409).json({
                success: false,
                message: `Sub file '${subFileName}' already exists. Please change the file name.`
            })
        }
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {
    createRepo
}