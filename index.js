// Modules and Globals
require('dotenv').config()
const express = require('express')
let app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', function(req, res){
    res.render('home')
})

app.get('*', function(req, res){
    res.status(404).render('error404')
})

//Listen for connections
app.listen(process.env.PORT)