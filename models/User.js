const mongoose = require('../db/connection.js');
// const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	projectIds: [{
		type: Schema.Types.ObjectId,
		ref: 'Project'
	}]
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
