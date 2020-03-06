const createServer = require('./src/server');

const start = async () => {
  const server = await createServer();
  try {
    console.log('HYYYY');
    await server.start();
    console.log('server started at ', server.info.uri);
  } catch (err) {
    console.error('Errrrror', err);
    throw err;
  }
};

start();
