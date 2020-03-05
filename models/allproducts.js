'use strict';
module.exports = (sequelize, DataTypes) => {
  const allproducts = sequelize.define('allproducts', {
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {});
  allproducts.associate = function(models) {
    // associations can be defined here
  };
  return allproducts;
};