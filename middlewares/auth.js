const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: 'Token não informado!' });

  // Bearer + hash
  const parts = authHeader.split(' ');

  if (!parts.length === 2 ) {
    return re.status(401).send({ error: 'Token error' });
  }

  const [ scheme, token ] = parts;

  if (scheme !== 'Bearer') {
    res.status(401).send({ error: 'Token mal formatado' });
  }

  jwt.verify(token, authConfig.secret, ( err, decoded) => {
    if(err) return res.status(401).send( { error: 'Token inválido' });

    req.user = decoded.id;

    console.log(decoded.token_valid_afterou);

    return next();

  });

};