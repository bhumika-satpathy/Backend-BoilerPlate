const { loadProducts, getProducts, getCategories } = require('../handlers/productHandlers');

module.exports = [
  { method: 'GET', path: '/loadDB', handler: loadProducts },
  { method: 'GET', path: '/products', handler: getProducts },
  { method: 'GET', path: '/categories', handler: getCategories },
];
