const axios = require('axios');
const db = require('../../models/index');
const dbOperations = require('../../src/helpers/dbOperations');


describe('The getAllProducts helper  ', () => {
  it('should get all the products from the database', async () => {
    const mockDb = jest.spyOn(db.allproducts, 'findAll');
    mockDb.mockResolvedValue([]);
    await dbOperations.getAllProducts();
    expect(mockDb).toHaveBeenCalled();
  });
});

xdescribe('The getCategories helper', () => {
  it('should check if all the categories are fetched from the database or not', async () => {
    const mockDb = jest.spyOn(db.allproducts, 'findAll');
    mockDb.mockResolvedValue({});
    const res = await dbOperations.getCategoriesDb();
    expect(mockDb).toHaveBeenCalled();
  });
});

describe('The updateCartValue helper  ', () => {
  it('should update all the products from the database', async () => {
    const mockDb = jest.spyOn(db.allproducts, 'update');
    mockDb.mockResolvedValue({});
    await dbOperations.updateCartValue();
    expect(mockDb).toHaveBeenCalled();
  });
});

describe('The updateQuantity helper  ', () => {
  it('should update all the products from the database', async () => {
    const mockDb = jest.spyOn(db.allproducts, 'update');
    mockDb.mockResolvedValue(true);
    await dbOperations.updateQuantity(1, 5);
    expect(mockDb).toHaveBeenCalled();
  });
});
