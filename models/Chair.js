const mongoose = require('../db/connection.js')

const ChairSchema = new mongoose.Schema({
  manufacturer: String,
  chairName: String,
  chairNumber: String,
  dimensions: String,
  imageURL: String,
  list: Number
});



mongoose.model('Chair', ChairSchema);

module.exports = mongoose.model('Chair');

