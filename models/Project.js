const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
	name: String,
    client: String,
    imageURL: String,
    chairIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Chair'
    }]
})

mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');