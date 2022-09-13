const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { version } = require('../package.json');

const routesApi = path.join(__dirname, '../api/**/index.js');
const routesAuthApi = path.join(__dirname, '../auth/local/index.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Assesment-Backend Documentation',
      version,
      description: 'This documentation looks for you to know the basic structure of thid API',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      contact: {
        name: 'Juan Pablo Diaz Arcila',
        url: 'https://github.com/Dhruva108',
        email: 'judiazarc@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  servers: [
    {
      url: 'http://localhost:8080/',
      description: 'Local server',
    },
  ],
  apis: [routesApi, routesAuthApi],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (_, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs running on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
