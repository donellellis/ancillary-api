const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const Project = new Schema({
	name: String,
    client: String,
    imageURL: String,
    chairIds: [String]
})

module.exports = mongoose.model('Project', Project)