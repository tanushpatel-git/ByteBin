const mongoose = require('mongoose');

const pushSchema = new mongoose.Schema({
  files: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  cwd: {
    type: String,
    default: '',
  },
  commitMessage: {
    type: String,
    default: '',
  },
  prDescription: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Push', pushSchema);
