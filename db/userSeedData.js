const mongoose = require('mongoose')
const projectIds = require('./projectSeedData').projectIds

const userIds = {
    "meg@email.com": new mongoose.Types.ObjectId(),
    "Ray@Eames.com": new mongoose.Types.ObjectId()
}

const userSeedData = [
    {
        "_id" : userIds['meg@email.com'],
        "email" : "meg@email.com",
        "password" : "meg123",
        "projectIds" : [
            projectIds["the crystal shop"]
        ]
    },

    {   "_id" : userIds['Ray@Eames.com'],
        "email" : "Ray@Eames.com",
        "password" : "LaChaise1948",
        "projectIds" : [
            projectIds['little leaf'],
            projectIds["moonshot"]
        ]
    }
]

module.exports = {
    userIds: userIds,
    userSeedData: userSeedData
}