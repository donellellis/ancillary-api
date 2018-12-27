const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const User = new Schema({
	email: String,
	password: String
})

module.exports = mongoose.model('User', User)

// const mongoose = require('../db/connection')

// const UserSchema = new mongoose.Schema({
// 	email: String,
// 	password: String
// })

// mongoose.model('User', UserSchema)

// module.exports = mongoose