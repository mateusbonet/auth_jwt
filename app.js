const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController');

app.get('/', function (req, res) {
  res.send({ "acao": 'logout' })
})

app.listen(80, function () {
  console.log('API template iniciado porta: 80')
})