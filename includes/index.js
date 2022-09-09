const { Console } = require('console')
const express = require('express')
const app = express()
const path = require('path')

let fetch = import('node-fetch')

//conf
app.set('port', 1234)


//html 
app.use(express.static(path.join(__dirname, '../public')))


//jquery
$("#title").text("Estudio de Mercado, Mercado Libre");


//routes
app.get('/', (req, res) => {

})

app.listen(app.get('port'), () => {
    console.log('app run in port 1234')

})