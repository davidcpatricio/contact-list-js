const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

function myMiddleware(req, res, next) {
  req.session = { nome: 'David', apelido: 'Patrício' };
  console.log();
  console.log('Passei no middleware.');
  console.log();
  next();
};

// Rotas da home
route.get('/', homeController.homepage);
route.post('/', homeController.processPost);

// Rotas de contacto
route.get('/contact', contactController.homepage);

module.exports = route;
