const mongoose = require("../db/connection")

const Schema = mongoose.Schema;


const Chair = new Schema({
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

// create instances chair and table

module.exports = mongoose.model("Chair", Chair);