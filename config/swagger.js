const express = require('express');
const doc = require('./swagger.doc');

const setup = app => {
  app.get('/swagger', (req, res) => {
    res.json(doc);
  });

  app.use('/swagger-ui', (req, res, next) => {
    if (req.url === '/') res.redirect('?url=/swagger');
    next();
  }, express.static('node_modules/swagger-ui/dist'));
};

module.exports = {setup};