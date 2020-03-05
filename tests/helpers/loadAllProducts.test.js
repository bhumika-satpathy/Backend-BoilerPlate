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
});
