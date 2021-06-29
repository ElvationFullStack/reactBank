const express = require('express')
const path = require('path')
const api = require('./server/routes/api')

var mongoose = require('mongoose')
var app = express()

const port = 3005
mongoose.connect("mongodb://localhost/ReactBank")

// app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
console.log(path.join(__dirname))
app.use('/', api)

app.listen(port, function () {
    console.log("Server up and running on port", port)
})

