const table = require('../models/table').table

function index(req,res){
  return res.render('index');
}

async function remove(req, res){
  const id = req.body.id;
  
  await table.destroy({where: {'id': id}});

  return res.redirect('/');
}

async function add(req, res){

  const tableExchange = {
    day : req.body.day,
    entrada : req.body.entrada,
    resultado : req.body.resultado,
    lucro : req.body.lucro  
  }

  const tableSaved = await table.create(tableExchange);

  if(tableSaved == 1){
    return res.redirect('/');
  }

  return res.redirect('/', {message:"Algo deu errado!!" });
}

async function update(req, res) {
    const id = req.body.id;

    const tableData = {
        day: req.body.day,
        entrada: req.body.entrada,
        resultado: req.body.resultado,
        lucro: req.body.lucro  
    }

    const tableUpdated = await table.update(tableData, { where { 'id': id }})

    if (tableUpdated == 1) {
       return res.redirect('/');
    }
    return res.redirect('/', { message: "Algo deu errado!!" });
}

module.exports = {
  index,
  add,
  remove,
  update, 
}