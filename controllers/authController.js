const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authConfig = require('../config/auth.json');
const authMiddleware = require('../middlewares/auth');

//router.use(authMiddleware);

router.post('/', (req, res) => {

  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).send({'error': 'Informe o usuário e senha!'})
  }

  const token = jwt.sign ({ id: user }, authConfig.secret, { 
    expiresIn: 10000 
  })
  
  res.send({ "token": token })
})

router.post('/logout', function (req, res) {
  res.send({ acao: 'logout' })
});

//module.exports = app => app.use('/auth', router ); //TODO
module.exports = router;