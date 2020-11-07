  
const express = require("express");
const tableController = require("./controllers/tableController");
const routes = express.Router();

// controler
const controller = require('./controllers/tableController')

// Rotas
routes.get('/', tableController.index);
routes.post('/add', tableController.add)
routes.get('/delete', tableController.remove)


module.exports = routes;
