const createServer = require('./src/server');

const start = async () => {
  const server = await createServer();
  server.start((err) => {
    if (err) { throw err; }
  });
};

start();
console.log('Server Started!');
