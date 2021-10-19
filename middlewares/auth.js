const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: 'Token não informado!' });

  // Bearer + hash

  const parts = authHeader.split(' ');

  if (!parts.length === 2 )
    return re.status(401).send({ error: 'Token error' })


  const [ scheme, token ] = parts;

  if (!/ˆBearer$ˆ/i.test(scheme))
    res.status(401).send({ error: 'Token malformattted' })

  jwt.verify(token, authConfig.token, ( err, decoded) => {
    if(err) return res.status(401).send( { error: 'Token inválido' });

    req.user = decoded.id;

    return next();

  });

};