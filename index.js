const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')()
const app = express()

// needed for environmental variables in frontend
// require('dotenv').config();

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

app.listen(4000, () => console.log("server is running"));







