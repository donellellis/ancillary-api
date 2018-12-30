const chairData = require('./chairSeedData.json')
const userData = require('./userSeedData.json')
const projectData = require('./projectSeedData.json')

const Chair = require('../models/Chair')
const User = require('../models/User')
const Project = require('../models/Project')


Chair.remove({})
    .then( () => {
        Chair.collection.insert(chairData)
            .then(seededEntries => {
                console.log(seededEntries)
            })
    })
    .catch(err => {
        console.log(err)
})

User.remove({})
    .then( () => {
        User.collection.insert(userData)
            .then(seededEntries => {
                console.log(seededEntries)
            })
    })
    .catch(err => {
        console.log(err)
})

Project.remove({})
    .then(() => {
        Project.collection.insert(projectData)
            .then(seededEntries => {
                console.log(seededEntries)
            })
    })
    .catch(err => {
        console.log(err)
})