const { loadAllProducts, getAllProducts } = require('../helpers/dbOperations');

const loadProducts = async (request, h) => {
  try {
    await loadAllProducts();
    return h.response('Loaded all the Products to the Database!').code(200);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const getProducts = async (request, h) => {
  try {
    const products = await getAllProducts();
    return h.response(products);
  } catch (err) {
    return h.response(err);
  }
};


module.exports = { loadProducts, getProducts };
