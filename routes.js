const router = require('./api/healthcheck/index');
const user = require('./api/user/index');

function routes(api) {
  api.use('api/healthcheck', router);
  api.use('api/users', user);
}

module.exports = routes;
