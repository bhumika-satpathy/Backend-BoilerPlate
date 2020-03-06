const axios = require('axios');
const db = require('../../models/index');

const getCategory = async (id) => {
  const category = await axios.get(`http://ec2-54-157-238-134.compute-1.amazonaws.com:8080/products/${id}/category`);
  return (category.data.category);
};

const loadAllProducts = async () => {
  const products = await axios.get('http://ec2-54-157-238-134.compute-1.amazonaws.com:8080/products');
  if (await db.allproducts.count() === 0) {
    products.data.forEach(async (product) => {
      const category = await getCategory(product.id);
      await db.allproducts.create({
        productId: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        link: product.imageLink,
        category,
      });
    });
  }
};

const getAllProducts = async () => {
  const products = [];
  const result = await db.allproducts.findAll({
  });
  result.forEach((product) => {
    products.push({
      id: product.dataValues.productId,
      name: product.dataValues.name,
      quantity: product.dataValues.quantity,
      price: product.dataValues.price,
      link: product.dataValues.link,
      category: product.dataValues.category,
      count: 0,
    });
  });
  return products;
};

module.exports = { loadAllProducts, getAllProducts };
