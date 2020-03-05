const axios = require('axios');
const db = require('../../models/index');

const loadAllProducts = async () => {
  const products = await axios.get('http://ec2-54-157-238-134.compute-1.amazonaws.com:8080/products');

  if (await db.allproducts.count() === 0) {
    products.data.forEach(async (product) => {
      await db.allproducts.create({
        productId: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        link: product.imageLink,
      });
    });
  }
};

module.exports = loadAllProducts;
