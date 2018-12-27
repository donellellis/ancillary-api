const mongoose = require("../db/connection")

const Schema = mongoose.Schema;


const Furniture = new Schema({
  quantity: Number,
  manufacturer: String,
  modelName: String,
  modelNumber: String,
  dimensions: String,
  imageURL: String
  // add automatically generated tag
  // add finishes
});

// create instances chair and table

module.exports = mongoose.model("Furniture", Furniture);