'use strict';
module.exports = (sequelize, DataTypes) => {
  const allproducts = sequelize.define('allproducts', {
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    link: DataTypes.STRING,
    category: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {});
  allproducts.associate = function(models) {
    // associations can be defined here
  };
  return allproducts;
};