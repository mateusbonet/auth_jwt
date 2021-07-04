var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send({"teste": 'Hello World!' , teste: 123})
})

app.get('/teste/:valor&:tipo', function (req, res) {
  
  const bwipjs = require('bwip-js');

        bwipjs.toBuffer({
            bcid: 'qrcode',
            text: req.params.valor,
            scale: 3,
            height: 10,
            includetext: true,
            textxalign: 'center'
        }, function(error, buffer) {
            if(error) {
                reject(error)
            } else {
                let gifBase64 = `data:image/gif;base64,${buffer.toString('base64')}`
                res.send({"gifBase64": gifBase64})
                
            }
        });
  
  /*res.send({"teste": req.params.valor , teste2: req.params.tipo})*/
})

app.listen(80, function () {
  console.log('Servidor da NASA -> porta: 80!')
})