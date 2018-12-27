const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/ancillary");

mongoose.Promise = Promise

module.exports = mongoose