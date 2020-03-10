const buildServer = require('../src/server');
const dbOperations = require('../src/helpers/dbOperations');

describe('The server ', () => {
  let server;
  beforeEach(async () => {
    server = await buildServer();
    await server.initialize();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('Should should return the 200 when get products is called', async (done) => {
    const injectOptions = {
      method: 'GET',
      url: '/products',
    };
    const mockGetProductHelper = jest.spyOn(dbOperations, 'getAllProducts');
    mockGetProductHelper.mockResolvedValue([{}, {}]);
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return the 200 when get categories is called', async (done) => {
    const injectOptions = {
      method: 'GET',
      url: '/categories',
    };
    const mockCategoriesFS = jest.spyOn(dbOperations, 'getCategoriesDb');
    mockCategoriesFS.mockResolvedValue(['123', '456']);
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return 200 when patch cart is called with right payload and params', async (done) => {
    const injectOptions = {
      method: 'PATCH',
      url: '/products/1/cart',
      payload: {
        value: 1,
      },
    };
    const mockCart = jest.spyOn(dbOperations, 'updateCartValue');
    mockCart.mockResolvedValue({});
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return 200 when patch quantity is called with right payload', async (done) => {
    const injectOptions = {
      method: 'PATCH',
      url: '/quantities',
      payload: [
        {
          id: 1,
          cart: 4,
          quantity: 9,
        },
      ],
    };
    const mockQuantity = jest.spyOn(dbOperations, 'updateQuantity');
    mockQuantity.mockResolvedValue({});
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return 400 when patch quantity is called with invalid payload', async (done) => {
    const injectOptions = {
      method: 'PATCH',
      url: '/quantities',
      payload: {
      },
    };
    const mockQuantity = jest.spyOn(dbOperations, 'updateQuantity');
    mockQuantity.mockResolvedValue({});
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(500);
    done();
  });
  it('Should should return 400 when patch cart is called with invalid payload', async (done) => {
    const injectOptions = {
      method: 'PATCH',
      url: '/products/1/cart',
      payload: {

      },
    };
    const mockCart = jest.spyOn(dbOperations, 'updateCartValue');
    mockCart.mockResolvedValue({});
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return 400 when patch cart is called with invalid params', async (done) => {
    const injectOptions = {
      method: 'PATCH',
      url: '/products/k/cart',
      payload: {
        value: 4,
      },
    };
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
});
