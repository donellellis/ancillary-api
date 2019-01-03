const mongoose = require('mongoose')

const chairIds = {
  "lasai" : new mongoose.Types.ObjectId(),
  "wishbone": new mongoose.Types.ObjectId(),
  "crosshatch": new mongoose.Types.ObjectId(),
  "piton": new mongoose.Types.ObjectId(),
  "apel": new mongoose.Types.ObjectId(),
  "kuskoa stool": new mongoose.Types.ObjectId(),
  "shell": new mongoose.Types.ObjectId(),
  "belleville": new mongoose.Types.ObjectId()
}

const chairSeedData = [
  {
    "_id" : chairIds["lasai"],
    "manufacturer": "studiotk",
    "chairName": "lasai",
    "chairNumber": "ALLCA",
    "dimensions": "30 D x 31.5 W 23.75 H",
    "imageURL": "https://i.imgur.com/3TXf2cp.jpg?1",
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
    "imageURL": "https://i.imgur.com/ecVn718.jpg?1",
    "list": 2500
  },

  {
    "_id" : chairIds["piton"],
    "manufacturer": "knoll",
    "chairName": "piton",
    "chairNumber": "BO11C",
    "dimensions": "14.25 D 14.25 W 18-22 H",
    "imageURL": "https://i.imgur.com/BIrnC3L.jpg?1",
    "list": 1066
  },

  {
    "_id" : chairIds["apel"],
    "manufacturer": "bernhardt",
    "chairName": "apel",
    "chairNumber": "5850L",
    "dimensions": "22.25 D 22.25 W 17.25 H",
    "imageURL": "https://i.imgur.com/S6bv4S7.jpg?1",
    "list": 835
  },

  {
    "_id" : chairIds["kuskoa stool"],
    "manufacturer": "studiotk",
    "chairName": "kuskoa stool",
    "chairNumber": "ALKSB",
    "dimensions": "19 D 16 W 39.5 H",
    "imageURL": "https://i.imgur.com/XuEUEFx.jpg?1",
    "list": 1645
  },

  {
    "_id" : chairIds["shell"],
    "manufacturer": "coalesse",
    "chairName": "shell",
    "chairNumber": "CH07OAK",
    "dimensions": "32.5 D 36.25 W 26 H",
    "imageURL": "https://i.imgur.com/PFW2hu5.jpg?1",
    "list": 4329
  },

  {
    "_id" : chairIds["belleville"],
    "manufacturer": "vitra",
    "chairName": "belleville",
    "chairNumber": "armchair wood",
    "dimensions": "19.75 D 19.25 W 32.75 H",
    "imageURL": "https://i.imgur.com/ztjQVwp.jpg",
    "list": 525
  }
]




module.exports = {
  chairIds: chairIds,
  chairSeedData: chairSeedData
}