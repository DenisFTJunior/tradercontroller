const table = require('./models/table').table

const express = require ("express")
const app = express()
//Body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function createGainLoss(req,res){
  table.create({
    week : req.body.week,
    entrada : req.body.entrada,
    resultado : req.body.resultado,
    total : req.body.total
  }).then(()=> res.redirect('/'))
}

function deleteFila(id){
  table.destroy({where: {'id':id}})
}

module.exports = {
  createGainLoss,
  deleteFila
}
