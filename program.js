const express = require ("express")
const app = express()

//handlebars config
const handlebars = require ("express-handlebars")
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//Body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

//entradas
const table = require('./models/table')
const controller = require('./controller')

const dayWeek = controller.dayWeek()

//Rotas
app.get('/', function(req,res){
  return table.all().then(entradas => res.render('index',{entradas:entradas}))
})

app.get('/add', (req,res)=>{
  return res.render('index')
})

app.post('/add',(req,res)=>{return controller.createGainLoss(req,res)})
app.get('/delete', (req,res)=>{return controller.deleteFila()})

app.listen('8081')
