const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

// needed for environmental variables in frontend
require('dotenv').config();


const seedData = require('./db/seedData.json')

const app = express()


app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())


// app.get('/api/furniture', (req, res) => {
//     res.json(seedData)
// })

// app.get('/api/translations', (req, res) => {
//     Translation.find()
//       .then((translations) => {
//         res.json(translations)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })

app.listen(4000, () => console.log("server is running"));
