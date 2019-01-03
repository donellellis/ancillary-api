const express = require('express')
const router = express.Router()

const Project = require('../models/Project')
const Chair = require('../models/Chair')

// finds all chairs in a project
router.post('/projectChairs', (req, res) => {

    // does not require authentication

    Project.findById(req.body.projectid)
    .populate('chairIds')
    .then(project => {
        if (project !== null) {
            res.json(project.chairIds)
        }
    })

})

// update chairIds in single project
router.put('/updateProjectChairs', (req, res) => {
    console.log(req.body)

    Project.findByIdAndUpdate(req.body.projectid)
    .populate('chairIds')
    .then(project => {
        for (let i = 0; i < req.body.isUsed.length; i++) {
            project.chairIds.push(req.body.isUsed[i])
        }
        project.save(function (err) {
            if (err) return handleError(err)
            console.log('project updated')
        })
    })
    .catch(err => {
        console.log(err)
    })

})

// finds all chairs
router.get('/', (req, res) => {
    Chair.find()
      .then((chairs) => {
          console.log(chairs)
        res.json(chairs)
      })
      .catch((err) => {
        console.log(err)
      })
})

module.exports = router
