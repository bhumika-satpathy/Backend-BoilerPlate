const dbOperations = require('../../src/helpers/dbOperations');
const {
  getProducts, getCategories, updateCart, updateQuantityHandler,
} = require('../../src/handlers/productHandlers');

describe('the update cart handler', () => {
  const mockReq = {
    payload: {
      value: 4,
    },
    params: {
      id: 1,
    },
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 and the updated cart values', async () => {
    const mockCart = jest.spyOn(dbOperations, 'updateCartValue');
    mockCart.mockResolvedValue({});
    await updateCart(mockReq, mockH);
    expect(mockCart).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith({});
    mockCart.mockRestore();
  });
  it('should respond with 500 error if an error occurs', async () => {
    const mockCart = jest.spyOn(dbOperations, 'updateCartValue');
    mockCart.mockRejectedValue(new Error('error'));
    await updateCart(mockReq, mockH);
    expect(mockCart).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockCart.mockRestore();
  });
});

describe('the update quantity handler', () => {
  const mockReq = {
    payload: [{
      id: 1,
      quantity: 4,
      count: 3,
    }],
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 and the updated quantity values', async () => {
    const mockQuantity = jest.spyOn(dbOperations, 'updateQuantity');
    mockQuantity.mockResolvedValue({});
    await updateQuantityHandler(mockReq, mockH);
    expect(mockQuantity).toHaveBeenCalledWith(1, 1);
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith('Updated the Quantity!');
    mockQuantity.mockRestore();
  });
});
