const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Requires dos controllers */
const authController = require('./controllers/authController');
const requisicoesController = require('./controllers/requisicoesController');

/** Use controllers */
app.use('/auth', authController );
app.use('/requisicoes', requisicoesController );

app.listen(80, function () {
  console.log('API template iniciado porta: 80')
})