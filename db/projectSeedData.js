const mongoose = require('mongoose')

const projectIds = {
        "moonshot" : new mongoose.Types.ObjectId(),
        "little leaf": new mongoose.Types.ObjectId(),
        "the crystal shop": new mongoose.Types.ObjectId(),
        "artifact": new mongoose.Types.ObjectId()
        }

const projectSeedData = [
        {
        "_id" : projectIds['moonshot'],
        "name" : "moonshot",
        "client" : "jesse gerard",
        "imageURL" : "https://i.imgur.com/nUA7NRz.jpg?1",
        "chairIds" : []
        },

        {
        "_id" : projectIds['little leaf'],
        "name" : "little leaf",
        "client" : "stacey mckenzie",
        "imageURL" : "https://i.imgur.com/S9wexON.jpg?2",
        "chairIds" : []
        },

        {
        "_id" : projectIds['the crystal shop'],
        "name" : "the crystal shop",
        "client" : "tomilee abadie",
        "imageURL" : "https://i.imgur.com/MkJe6rT.jpg",
        "chairIds" : []
        },

        {
        "_id" : projectIds['artifact'],
        "name" : "artifact",
        "client" : "amy mandler",
        "imageURL" : "https://i.imgur.com/yC1jyKE.jpg",
        "chairIds" : []
        }
]

module.exports = {
        projectIds: projectIds,
        projectSeedData: projectSeedData
}