const table = require('./models/table')

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
  })
}

function deleteFila(id){
  table.destroy({where: {'id':id}})
}

//PUXANDO DIA
let d = new Date()
let day = d.getDay()
let dayWeek = function() {
  switch (day) {
    case 1:
        return 'SEG'
    break;
    case 2:
        return 'TER'
    break;
    case 3:
        return 'QUA'
    break;
    case 4:
        return 'QUI'
    break;
    case 5:
        return 'SEX'
    break;
    case 6:
        return 'SAB'
    break;
    case 7:
        return 'DOM'
    break;
    default:
    break;
  }
}

module.exports = {
  createGainLoss,
  deleteFila,
  dayWeek
}
