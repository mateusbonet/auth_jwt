const express = require('express');
const router = express.Router();
const app = express();

const authConfig = require('../config/auth.json');
const authMiddlewares = require('../middlewares/auth');

router.use(authMiddlewares);

router.get('/', (req, res) => {
  res.send({ acao: 'logout' })
})

app.post('/auth/', function (req, res) {

  //if (isNaN(req.body.password))
   // return res.status(400).send({'error': 'Informe o usuário e senha!'})

  const token = jtw.sign ({ id: 'chave_unica' }, authConfig.secret, { 
    expiresIn: 100 
  })
  
  res.send({"token": token })
})

router.post('/logout', function (req, res) {
  res.send({ acao: 'logout' })
});

module.exports = app => app.use('/auth', router );