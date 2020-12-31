// Requires //
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// Initializations //
let server = express()

// Settings //
server.set('port', process.env.PORT || 3000)

// Middlewares //
server.use(compression())
server.use(cors())
server.use(morgan('dev'))
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Server ON //
server.listen(server.get('port'), () => console.log(`Server on port ${server.get('port')}`))

// Load routes //
let indexRoutes = require('./routes/index.routes')

// User routes //
server.use('/', indexRoutes)

// Exports //
module.exports = server