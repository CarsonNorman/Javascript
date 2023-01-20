const express = require('express')
const app = express()
const port = 8000

require('./server/config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: false}))
const routes = require('./server/routes/jokes.route')
routes(app)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})