// Mock localStorage
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

// app.test.js (ใช้ CommonJS syntax)
const { addToCart, removeFromCart, updateCartCount } = require('./script.js');

test('addToCart adds an item to the cart', () => {
  const cart = [];
  addToCart(1, 'Product A', 100);
  expect(cart).toHaveLength(1);
  expect(cart[0]).toEqual({ id: 1, name: 'Product A', price: 100, quantity: 1 });
});

test('removeFromCart removes an item from the cart', () => {
  const cart = [{ id: 1, name: 'Product A', price: 100, quantity: 1 }];
  removeFromCart(1);
  expect(cart).toHaveLength(0);
});
