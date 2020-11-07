const express = require ("express")
const app = express()

//handlebars config
const handlebars = require ("express-handlebars")
app.engine('handlebars', handlebars({defaultLayout:'main',  helpers: require('./views/helpers/helper').helpers()}))
app.set('view engine', 'handlebars')

//Body-parse
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//css and js to handlebars
app.use(express.static('public'))

//entradas
const table = require('./models/table').table
const controller = require('./controller')

//Rotas
app.get('/', function(req,res){
  return res.render('index');
})

app.post('/add',(req,res)=> 
  table.create({
    day : req.body.day,
    entrada : req.body.entrada,
    resultado : req.body.resultado,
    lucro : req.body.lucro  
  }).then(()=>{res.redirect('/')} ).catch(err=> {throw err}))

app.get('/delete', (req,res)=>{return controller.deleteFila(table.req.body.id)})

app.listen('8081')
