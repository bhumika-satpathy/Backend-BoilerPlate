const { loadProducts } = require('../handlers/loadProducts');
// const handlers = require('../handlers')

module.exports = [
  { method: 'GET', path: '/loadDB', handler: loadProducts },
];
