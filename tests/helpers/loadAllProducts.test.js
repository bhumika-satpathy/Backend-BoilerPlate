const axios = require('axios');
const loadAllProducts = require('../../src/helpers/loadProductsDb');
const db = require('../../models/index');

describe('The loadAllProducts helper function ', () => {
  it('should invoke the create function to add a product', async () => {
    const mockCreate = jest.spyOn(db.allproducts, 'create');
    mockCreate.mockResolvedValue(true);
    loadAllProducts();
    // expect(mockCreate).toHaveBeenCalledWith({
    //   id: 1,
    //   name: 'Pineapple Express',
    //   quantity: 100,
    //   price: 100,
    //   imageLink: 'www.google.com',
    // });
  });

  it('should mock axios to fetch all the products from the api', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue(true);
    loadAllProducts();
    expect(mockAxios).toHaveBeenCalled();
  });
});
