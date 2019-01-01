const mongoose = require('mongoose')

const chairIds = {
  "lasai" : new mongoose.Types.ObjectId(),
  "wishbone": new mongoose.Types.ObjectId(),
  "crosshatch": new mongoose.Types.ObjectId()
}

const chairSeedData = [
  {
    "_id" : chairIds["lasai"],
    "manufacturer": "studiotk",
    "chairName": "lasai",
    "chairNumber": "ALLCA",
    "dimensions": "30 D x 31.5 W 23.75 H",
    "imageURL": "https://i.imgur.com/3TXf2cp.jpg",
    "list": 2595
  },

  {
    "_id" : chairIds["wishbone"],
    "manufacturer": "coalesse",
    "chairName": "wishbone",
    "chairNumber": "ch24",
    "dimensions": "20 D 21.5 W 29.5 H",
    "imageURL": "https://i.imgur.com/2XFQPBB.png",
    "list": 900
  },

  {
    "_id" : chairIds["crosshatch"],
    "manufacturer": "herman miller",
    "chairName": "crosshatch",
    "chairNumber": "SES1A6A122H16CBKNOCAL",
    "dimensions": "30.25 D 31.25 W 28.5 H",
    "imageURL": "https://i.imgur.com/ecVn718.jpg",
    "list": 2500
  }
]

module.exports = {
  chairIds: chairIds,
  chairSeedData: chairSeedData
}