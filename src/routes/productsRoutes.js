const {
  getProducts, getCategories, updateCart, updateQuantityHandler,
} = require('../handlers/productHandlers');

module.exports = [
  // { method: 'GET', path: '/loadDB', handler: loadProducts },
  { method: 'GET', path: '/products', handler: getProducts },
  { method: 'GET', path: '/categories', handler: getCategories },
  { method: 'PATCH', path: '/products/{id}/cart', handler: updateCart },
  { method: 'PATCH', path: '/quantities', handler: updateQuantityHandler },
];
