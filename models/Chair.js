const mongoose = require('../db/connection.js')
// const mongoose = require('mongoose');

const ChairSchema = new mongoose.Schema({
  manufacturer: String,
  chairName: String,
  chairNumber: String,
  dimensions: String,
  imageURL: String,
  list: Number
  // add user input for quantity
  // add automatically generated tag
  // add finishes
  // format d w l consistently - seperate
  // format list price consistently
});



mongoose.model('Chair', ChairSchema);

module.exports = mongoose.model('Chair');

