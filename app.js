const express = require("express");

const app = express();
const path = require("path")

const routes = require("./routes");
const helpers = require('./views/helpers/helper').helpers();

//handlebars config
const handlebars = require ("express-handlebars")
app.engine('handlebars', handlebars({defaultLayout:'main',  helpers}))
app.set('view engine', 'handlebars')

//Body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//css and js to handlebars
app.use(express.static(path.join(__dirname,'./public/')))

app.use(routes);

module.exports = app;
