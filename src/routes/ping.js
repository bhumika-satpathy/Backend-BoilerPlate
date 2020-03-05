const handlers = require('../handlers');

const routesArr = [
  { method: 'GET', path: '/ping', handler: handlers.pinghandlers.ping },
];

module.exports = routesArr;
