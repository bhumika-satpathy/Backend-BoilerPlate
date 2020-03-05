const Hapi = require('@hapi/hapi');
const routes = require('./routes/productsRoutes');

const createServer = async () => {
  const server = await Hapi.server({
    host: 'localhost',
    port: 8080,
    routes: {
      cors: true,
    },
  });
  await server.route(routes);
  return server;
};

module.exports = createServer;
