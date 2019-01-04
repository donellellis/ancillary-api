const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Project = require('../models/Project')

const decodeToken = require('./auth')

// finds all user projects
router.get('/', (req, res) => {

    const id = decodeToken(req)

    console.log(id)
    User.findById(id)
    .populate('projectIds')
    .then(user => {
        // console.log('user', user)
        if (user !== null) {
            // request is authenticated
            res.json(user.projectIds)
        }
    }) 

})

// finds single project
router.post('/singleProject', (req, res) => {

    const id = decodeToken(req)
    // console.log(id)

    User.findById(id)
    .then (user => {
        if (user !== null) {
            // console.log('body', req.body)
            Project.findById(req.body.projectid)
            .then(project => {
                res.json(project)
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
})


// deletes a single project
router.delete('/deleteProject', (req, res) => {

    const id = decodeToken(req)
    // console.log('project id', id)

    User.findById(id)
    .then (user => {
        if (user !== null) {
            // console.log('body', req.body)
            Project.findOneAndDelete({_id: req.body.projectid})
                .then(() => {
                    console.log("project deleted")
                    res.status(200).end()
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
})


// creates a new project and pushes to user
router.post('/', (req, res) => {
    const id = decodeToken(req)
    
    project = new Project ({
        name: req.body.name,
        client: req.body.client,
        imageURL: req.body.imageURL
    });

    project.save((err, doc) => {
        if (err) {
            res.send(err);
        }
        User.findByIdAndUpdate(id)
        .then(user => {
            user.projectIds.push(doc)
            user.save(function (err) {
                if (err) {
                    console.log(err)
                }
                console.log('project created')
            })
            res.status(200).end()
        })
    })
    
})

module.exports = router