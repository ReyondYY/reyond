
let express = require('express');

let home = express.Router();

home.get('/', (req, res) => {
  res.render('home/index', {});
});

home.get('/article', (req, res) => {
  res.render('home/article', {})
})

module.exports = home;