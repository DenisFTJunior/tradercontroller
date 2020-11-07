const table = require('./models/table').table

const express = require ("express")
const app = express()
//Body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function deleteFila(id){
  table.destroy({where: {'id':id}})
}

