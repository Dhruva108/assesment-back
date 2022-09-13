require('dotenv').config();
const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routes = require('./routes');
const swagger = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  expressConfig(app);
  await databaseConfig();
  routes(app);
  swagger(app, PORT);

  console.log(`server running at http://localhost:${PORT}`);
});
