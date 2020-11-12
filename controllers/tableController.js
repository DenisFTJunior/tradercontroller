const table = require('../models/table').table

async function index(req,res){
  let data = await table.findAll();
  return res.render('index', {entrada:data});
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
    resultado : req.body.saida,
    lucro : req.body.lucro  
  }

  const tableSaved = await table.create(tableExchange);

  if(tableSaved == 1){
    return res.redirect('/');
  }

  return res.redirect('/');
}

async function update(req, res) {
    const id = req.body.id;

    const tableData = {
        day: req.body.day,
        entrada: req.body.entrada,
        resultado: req.body.saida,
        lucro: req.body.lucro  
    }

    const tableUpdated = await table.update(tableData, { where:  {'id': id} })

    if (tableUpdated == 1) {
       return res.redirect('/');
    }
    return res.redirect('/');
}

module.exports = {
  index,
  add,
  remove,
  update, 
}