
const mongoose = require('mongoose')
const reportSchema = require("./report")
const userSchema = require("./user")
const speciesSchema = require("./species")


const User = mongoose.model('User', userSchema)
const Report = mongoose.model('Report', reportSchema)
const Species = mongoose. model('Species', speciesSchema)

module.exports = {User, Report, Species}