// Requires //
const { Router } = require('express')

// Controllers //
let indexController = require('../controllers/index.controller')

// Initializations //
let routes = Router()

// Routes //
routes.get('/', indexController.msg)

// Exports //
module.exports = routes