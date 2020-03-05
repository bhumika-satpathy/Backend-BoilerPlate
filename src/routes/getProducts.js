const { loadProducts } = require('../handlers/loadProducts');

module.exports = [
  { method: 'GET', path: '/loadDB', handler: loadProducts },
];
