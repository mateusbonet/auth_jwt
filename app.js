var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send({"teste": 'Hello World!' , teste: 123})
})

app.get('/consultaprodutos', function (req, res) {
  res.send({"teste": 'Hello World!' , teste: { "cd": 12 , "descr": "produto teste"} })
})

app.listen(80, function () {
  console.log('API template iniciado porta: 80')
})