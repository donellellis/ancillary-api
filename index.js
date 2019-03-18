const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')()
const app = express()

// prevents heroku from sleeping
let http = require('http')
setInterval(function() {
    http.get('https://ancillary-api.herokuapp.com/')
}, 300000) // every 5 minutes (300000)

// needed for environmental variables in frontend
require('dotenv').config();

// controllers
const userController = require('./controllers/users.js')
const projectController = require('./controllers/projects.js')
const chairController = require('./controllers/chairs.js')


app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())
app.use(passport.initialize())

// routes
app.use('/projects', projectController)
app.use('/users', userController)
app.use('/chairs', chairController)

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})