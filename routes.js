const router = require('./api/healthcheck/index');
const user = require('./api/user/index');
const authlocal = require('./auth/local');
const favorites = require('./api/favoritesList');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/user', user);
  app.use('/api/favs', favorites);

  app.use('/api/auth/local', authlocal);
}

module.exports = routes;
