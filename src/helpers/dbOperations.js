const axios = require('axios');
const db = require('../../models/index');

const getCategory = async (id) => {
  const category = await axios.get(`http://ec2-54-157-238-134.compute-1.amazonaws.com:8080/products/${id}/category`);
  return (category.data.category);
};

const getAllProducts = async () => {
  if (await db.allproducts.count() === 0) {
    const products = await axios.get('http://ec2-54-157-238-134.compute-1.amazonaws.com:8080/products');
    products.data.forEach(async (product) => {
      const category = await getCategory(product.id);
      await db.allproducts.create({
        productId: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        link: product.imageLink,
        count: 0,
        category,
      });
    });
  }
  const allProductsData = [];
  const result = await db.allproducts.findAll({
  });
  result.forEach((product) => {
    allProductsData.push({
      id: product.dataValues.productId,
      name: product.dataValues.name,
      quantity: product.dataValues.quantity,
      price: product.dataValues.price,
      link: product.dataValues.link,
      category: product.dataValues.category,
      count: product.dataValues.count,
    });
  });
  return allProductsData;
};

const getCategoriesDb = async () => {
  const categories = [];
  const products = await db.allproducts.findAll();

  products.forEach((product) => {
    if (categories.indexOf(product.category) === -1)categories.push(product.category);
  });
  return categories;
};

const updateCartValue = async (id, value) => {
  const res = await db.allproducts.update({ count: value }, {
    where: {
      productId: id,
    },
  });
  return res;
};

const updateQuantity = async (id, value) => {
  const result = await db.products.update({ quantity: value, count: 0 }, {
    where: {
      productId: id,
    },
  });
  return result;
};

module.exports = {
  getAllProducts, getCategoriesDb, updateCartValue, updateQuantity,
};
