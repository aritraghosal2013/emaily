const express = require('express')
require('./services/passportConfig')

const app = express()
require('./routes/authRoutes')(app)         // Binding the routes

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Node server running at port ', PORT)
})
