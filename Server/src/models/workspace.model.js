const mongoose = require("mongoose");
const workSpaceSchema = new mongoose.Schema({
    title: {
        name: String,
        connectionString: String,
        titleCode: Object,
         useTitleCode: Boolean
    }, 
    subtitle: [{
        name: String,
        code: Object,
        subConnectionString: String,
    }]
}, { timestamps: true })

const workspace = mongoose.model('workspace', workSpaceSchema);
module.exports = workspace ;
 