const table = require('../models/table').table

let error = []

async function index(req,res){
    let entradas = await table.findAll();
    const newEntrada = {
      entrada: entradas.map(data => {
         let dataString = data.day.toString()
         dataString = dataString.substring(3,15)
          return {
              day: dataString,
              entrada: data.entrada,
              porcentagem: data.porcentagem,
              result: data.result,
              lucro: data.lucro
          }
      })
  }
    return res.render('index', {error, entrada:newEntrada.entrada});
}


async function remove(req, res){
  //chegar token posteriormente
  const id = req.body.id;
  
  await table.destroy({where: {'id': id}});

  return res.redirect('/');
}

async function add(req, res){
  error = []
  if(req.body.entrada === undefined ||  req.body.result === undefined || req.body.day=== undefined|| req.body.porcentagem === undefined){
    error.push("PRENCHA TODOS OS CAMPOS")
    return res.redirect('/')
  }
  if(req.body.entrada == null || req.body.porcentagem == null|| req.body.result == null || req.body.day== null){
    error.push("PRENCHA TODOS OS CAMPOS")
     return res.redirect('/')
  }

  let lucro =0;
  if(req.body.result === "positive"){
    lucro = req.body.entrada*(req.body.porcentagem/100)
  }else{
    lucro -=  req.body.entrada
  }


  const tableExchange = {
    day : req.body.day,
    entrada : req.body.entrada,
    porcentagem : req.body.porcentagem,
    result : req.body.result,
    lucro: lucro,
  }

  const tableSaved = await table.create(tableExchange);
  
  if(tableSaved == 1){
    return res.redirect('/');
  }

  return res.redirect('/');
}

async function update(req, res) {
   
  if(req.body.entrada === undefined ||  req.body.result === undefined || req.body.day=== undefined|| req.body.porcentagem === undefined){
    error.push("PRENCHA TODOS OS CAMPOS")
    return res.redirect('/')
  }
    if(req.body.entrada == null || req.body.porcentagem == null|| req.body.result == null || req.body.day== null){
      error.push("Prencha todos os campos")
    }

    const id = req.body.id;

    const tableData = {
      day : req.body.day,
      entrada : req.body.entrada,
      porcentagem : req.body.porcentagem,
      result : req.body.result  
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