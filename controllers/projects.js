const express = require('express')
const router = express.Router()

const mongoose = require('../models/Project')
const Project = mongoose.model('Project')

router.post('/', (req, res) => {
    Project.create({
        name: req.body.name,
        client: req.body.client,
        imageURL: req.body.imageURL
    }).then(project => {
        res.json(project)
        console.log(project)
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/', (req, res) => {
    Project.find()
      .then((projects) => {
        res.json(projects)
      })
      .catch((err) => {
        console.log(err)
      })
  })

module.exports = router