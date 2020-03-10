const {
  getAllProducts, getCategoriesDb, updateCartValue, updateQuantity,
} = require('../helpers/dbOperations');

// const loadProducts = async (request, h) => {
//   try {
//     console.log('Inside handler');
//     await loadAllProducts();
//     return h.response('Loaded all the Products to the Database!').code(200);
//   } catch (err) {
//     return h.response(err).code(500);
//   }
// };

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

const updateCart = async (request, h) => {
  try {
    const { value } = request.payload;
    const { id } = request.params;
    const result = await updateCartValue(id, value);
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
        await updateQuantity(id, updateValue);
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
