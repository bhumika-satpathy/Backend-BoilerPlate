
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    link: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};
