const route = require('express').Router()
const login = require('./api.auth.login')
const join = require('./api.auth.join')

route.use('/login',login)
route.use('/join',join)

module.exports = route