require('dotenv').config();
const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routes = require('./routes');

const api = express();

const PORT = process.env.PORT || 8000;

api.listen(PORT, async () => {
  expressConfig(api);
  await databaseConfig();
  routes(api);

  console.log(`server running at http://localhost:${PORT}`);
});
