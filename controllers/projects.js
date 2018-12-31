const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const User = require('../models/User')
const Project = require('../models/Project')

const decodeToken = require('./auth')


// this auth method requires that the token be send in the "header" portion of the request with the "Bearer" prefix
// headers: {
//   authorization: 'Bearer ' + token
//}


router.get('/', (req, res) => {
    const id = decodeToken(req)

    console.log(id)
    User.findById(id)
    .populate('projectIds')
    .then(user => {
        console.log('user', user)
        if (user !== null) {
            // request is authenticated
            res.json(user.projectIds)
        }
    }) 

})

router.post('/new')


// router.post('/', (req, res) => {
//     Project.create({
//         name: req.body.name,
//         client: req.body.client,
//         imageURL: req.body.imageURL
//     }).then(project => {
//         res.json(project)
//     }).catch((err) => {
//         console.log(err)
//     })
// })


module.exports = router