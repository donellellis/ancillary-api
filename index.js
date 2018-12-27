const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')()

// const furnitureController = require('./controllers/furnitures.js')
const userController = require('./controllers/users.js')


// needed for environmental variables in frontend
require('dotenv').config();


const app = express()


app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())
app.use(passport.initialize())
// app.use('/api/furnitures', furnitureController)
app.use('/users', userController)


app.listen(4000, () => console.log("server is running"));
