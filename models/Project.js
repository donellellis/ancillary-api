const mongoose = require('../db/connection.js')
// const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
	name: String,
    client: String,
    imageURL: String,
    userIds: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chairIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Chair'
    }]
})

mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');