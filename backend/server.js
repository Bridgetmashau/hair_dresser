const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./routes/router')






app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })

)
app.use('/api',router)



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

