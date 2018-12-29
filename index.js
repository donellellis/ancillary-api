const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')()

// const chairController = require('./controllers/chairs.js')
const userController = require('./controllers/users.js')
const projectController = require('./controllers/projects.js')


// needed for environmental variables in frontend
require('dotenv').config();


const app = express()


app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())
app.use(passport.initialize())
// app.use('/api/chairs', chairController)
app.use('/projects', projectController)
app.use('/users', userController)


app.listen(4000, () => console.log("server is running"));
