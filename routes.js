  
const express = require("express");
const tableController = require("./controllers/tableController");
const routes = express.Router();


// Rotas
routes.get('/', tableController.index);
routes.post('/add', tableController.add)
routes.get('/delete', tableController.remove)
routes.post('/update', tableController.update)

module.exports = routes;
