const axios = require('axios');
const db = require('../../models/index');
const dbOperations = require('../../src/helpers/dbOperations');


describe('The getAllProducts helper  ', () => {
  it('should get all the products from the databse', async () => {
    const mockDb = jest.spyOn(db.allproducts, 'findAll');
    mockDb.mockResolvedValue([]);
    await dbOperations.getAllProducts();
    expect(mockDb).toHaveBeenCalled();
  });
});
