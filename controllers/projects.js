const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Project = require('../models/Project')


const jwt = require('jwt-simple') // used to create, sign, and verify tokens
const config = require('../config/config') //get config file


// used to verify token and create a request for use in other routes
function verifyToken(req, res, next) {

    // check header for token
    var token = req.headers['x-access-token'];
    if (!token) 
      return res.status(403).send({ auth: false, message: 'No token provided.' });

    // verifies secret
    jwt.verify(token, config.jwtSecret, function(err, decoded) {      
      if (err) 
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    
  
      // if everything is verified, save to request for use in other routes
      req.userId = decoded.id;
      next();
    });
  
}



router.get('/show'), (req, res) => {

}


// jesse
// function verityToken(token) {
//     const id = jwt.decode(token, config.jwtSecret)
//     // User.findById(id)

//     // if findById returns a document ( is found in database)
//     // return true
//     // else return false
// }

// jesse
// router.get('/'), (req, res) => {
//     if (verifyToken(req.body.token {
//         // get project ids from user db
//         // then get project data from projects db
//         // res project data
//     }))
// }


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

// router.get('/', (req, res) => {
//     Project.find()
//       .then((projects) => {
//         res.json(projects)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
// })

module.exports = router









var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });

}

module.exports = verifyToken;