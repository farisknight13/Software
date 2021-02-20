const express = require('express')
const app = express()
const multer = require('multer')
const multerConfig = require('./config/multer_config')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)

// IMPORT CORS
const cors = require('cors')

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
//middle ware
app.use(express.json())
app.use(cors(corsOpts))
app.use(express.urlencoded({ extended: false}))
app.use(require('./controller'))

// DECLARE CORS POLICY


const PORT = process.env.PORT || 1150

app.listen(PORT, () => {
  const env = `${process.env.NODE_ENV || 'development'}`
  console.log(`App listening on port ${PORT}`)
  console.log(`App listening on env ${env}`)
  console.log(`Press Ctrl+C to quit`)
})