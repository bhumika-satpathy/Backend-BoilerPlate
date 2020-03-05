const { loadAllProducts } = require('../helpers/loadProductsDb');

const loadProducts = async (request, h) => {
  try {
    await loadAllProducts();
    return h.response('Loaded all the Products to the Database!').code(200);
  } catch (err) {
    return h.response(err).code(500);
  }
};


module.exports = { loadProducts };
