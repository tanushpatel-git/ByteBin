const mongoose = require("mongoose")
require("../../model/user.model")


const fileModel = new mongoose.Schema({
    files: {
        type: mongoose.Schema.Types.Mixed,
    },
    name:{
        type: String,
        required: true
    },
    sub_url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    cwd: {
        type: String,
      },
    commitMessage: {
        type: String,
    },
    prDescription: {
        type: String,
    },
})
const FileModel = mongoose.model('File', fileModel)

const RepoDesignModel = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true
    },
    titleCode: {
        type: String,
        required: true
    },
    main_url: {
        type: String,
        default: ''
    },
    main_description: {
        type: String,
        default: ''
    },
    files: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    },
    cwd: {
        type: String,
    },
    commitMessage: {
        type: String,
    },
    prDescription: {
        type: String,
    },
    collections_files: {
        type: [fileModel],
        default: []
    },
}, { timestamps: true })

RepoDesignModel.index({ ownerId: 1, main_url: 1 }, { unique: true })

const RepoDesign = mongoose.model('RepoDesign', RepoDesignModel)
module.exports = RepoDesign
