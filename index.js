const createServer = require('./src/server');

const start = async () => {
  const server = await createServer();
  try {
    await server.start();
    console.log('server started at ', server.info.uri);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

start();
