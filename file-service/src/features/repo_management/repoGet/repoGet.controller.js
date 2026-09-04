const mongoose = require("mongoose")
const RepoDesign = require("../repoDesign.model")

const getRepoByCommits = async (req, res) => {
    try {
        const { userId } = req.params
        const { search } = req.body

        const repos = await RepoDesign.find({ ownerId: userId }).lean()

        if (!repos || repos.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No repos found for this user"
            })
        }

        const result = []

        repos.forEach((repo) => {
            const base = {
                _id: repo._id,
                ownerId: repo.ownerId,
                name: repo.name,
                titleCode: repo.titleCode,
                main_url: repo.main_url,
                main_description: repo.main_description,
                files: repo.files,
                cwd: repo.cwd,
                createdAt: repo.createdAt,
                updatedAt: repo.updatedAt,
            }

            const hasOwnCommitData = repo.commitMessage || repo.prDescription

            if (hasOwnCommitData) {
                result.push({
                    ...base,
                    commitMessage: repo.commitMessage,
                    prDescription: repo.prDescription,
                    filesSnapshot: repo.files,
                    type: "main"
                })
            }

            if (repo.collections_files && repo.collections_files.length > 0) {
                repo.collections_files.forEach((file) => {
                    if (file.commitMessage || file.prDescription) {
                        result.push({
                            _id: repo._id,
                            ownerId: repo.ownerId,
                            name: file.name,
                            titleCode: `${repo.titleCode}/${file.sub_url}`,
                            main_url: repo.main_url,
                            main_description: repo.main_description,
                            sub_url: file.sub_url,
                            files: file.files,
                            cwd: file.cwd,
                            commitMessage: file.commitMessage,
                            prDescription: file.prDescription,
                            filesSnapshot: file.files,
                            createdAt: repo.createdAt,
                            updatedAt: repo.updatedAt,
                            type: "sub"
                        })
                    }
                })
            }
        })

        if (result.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No commits found for this user",
                data: []
            })
        }

        let data = result

        if (search && search.trim()) {
            const words = search.trim().toLowerCase().split(/[,\s]+/)

            data = result.filter((entry) => {
                const text = `${entry.commitMessage || ""} ${entry.prDescription || ""}`.toLowerCase()
                return words.every((word) => text.includes(word))
            })
        }

        if (data.length === 0) {
            return res.status(200).json({
                success: true,
                message: search ? "No repos matching the search" : "No commits found for this user",
                data: []
            })
        }

        return res.status(200).json({
            success: true,
            message: search ? "Repos fetched by commit search" : "Repos fetched by commits",
            data
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

const getAllRepos = async (req, res) => {
    try {
        const { userId } = req.params
        const page = parseInt(req.query.page, 10) || 1
        const limit = parseInt(req.query.limit, 10) || 15
        const safeLimit = Math.min(Math.max(limit, 1), 100)

        if (page < 1) {
            return res.status(400).json({
                success: false,
                message: "Page number must be a positive integer"
            })
        }

        const [result] = await RepoDesign.aggregate([
            { $match: { ownerId: new mongoose.Types.ObjectId(userId) } },
            {
                $facet: {
                    data: [
                        { $sort: { createdAt: -1 } },
                        { $skip: (page - 1) * safeLimit },
                        { $limit: safeLimit },
                    ],
                    total: [{ $count: "count" }],
                },
            },
        ])

        const repos = result.data
        const total = (result.total[0] && result.total[0].count) || 0
        const totalPages = total === 0 ? 0 : Math.ceil(total / safeLimit)

        return res.status(200).json({
            success: true,
            message: repos.length > 0 ? "Repos fetched successfully" : "No repos found",
            data: repos,
            pagination: {
                page,
                limit: safeLimit,
                total,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
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

module.exports = { getRepoByCommits, getAllRepos }