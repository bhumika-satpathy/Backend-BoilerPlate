const dbOperations = require('../helpers/dbOperations');

const getProducts = async (request, h) => {
  try {
    const products = await dbOperations.getAllProducts();
    return h.response(products).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const getCategories = async (request, h) => {
  try {
    const categoriesArray = await dbOperations.getCategoriesDb();
    return h.response(categoriesArray).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const updateCart = async (request, h) => {
  try {
    const { value } = request.payload;
    const { id } = request.params;
    const result = await dbOperations.updateCartValue(id, value);
    return h.response(result).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const updateQuantityHandler = async (request, h) => {
  try {
    const products = request.payload;
    products.forEach(async (element) => {
      const { id, count, quantity } = element;
      if (count !== 0) {
        const updateValue = quantity - count;
        await dbOperations.updateQuantity(id, updateValue);
      }
    });
    return h.response('Updated the Quantity!').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = {
  getProducts, getCategories, updateCart, updateQuantityHandler,
};
