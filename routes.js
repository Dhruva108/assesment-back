const router = require('./api/healthcheck/index');
const user = require('./api/user/index');

function routes(api) {
  api.use('api/users', router);
  api.use('api/users', user);
}

module.exports = routes;
