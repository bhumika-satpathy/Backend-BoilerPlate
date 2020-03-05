const { loadProducts, getProducts } = require('../handlers/productHandlers');

module.exports = [
  { method: 'GET', path: '/loadDB', handler: loadProducts },
  { method: 'GET', path: '/products', handler: getProducts },
];
