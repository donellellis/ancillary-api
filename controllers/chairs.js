const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Project = require('../models/Project')
const Chair = require('../models/Chair')

const decodeToken = require('./auth')

// finds all project chairs
router.post('/projectChairs', (req, res) => {

    // add authentication

    Project.findById(req.body.projectid)
    .populate('chairIds')
    .then(project => {
        if (project !== null) {
            res.json(project.chairIds)
        }
    })

})

module.exports = router
























// const express = require('express')
// const router = express.Router()
// const mongoose = require("../models/Furniture.js")
// const Furniture = mongoose.model('Furniture')
// const seedData = require('../db/seedData.json')

// app.get('/', (req, res) => {
//     res.json(seedData)
// })

// router.get('/', (req, res) => {
//     res.json(seedData)
// })

// router.get('/', (req, res) => {
//     Furniture.find({})
//         .then(furniture => res.json(furniture))
// })

// module.exports = router



// app.get('/api/translations', (req, res) => {
//     Translation.find()
//       .then((translations) => {
//         res.json(translations)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })


// router.get('/', (req, res) => {
//     Dog.find({})
//         .then(dogs => res.json(dogs))
// })
