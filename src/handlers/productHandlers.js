const { loadAllProducts, getAllProducts, getCategoriesDb } = require('../helpers/dbOperations');

const loadProducts = async (request, h) => {
  try {
    console.log('Inside handler');
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

const getCategories = async (request, h) => {
  try {
    const categoriesArray = await getCategoriesDb();
    return h.response(categoriesArray).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = { loadProducts, getProducts, getCategories };
