// app.test.js (ใช้ CommonJS syntax)
const { addToCart, removeFromCart, updateCartCount } = require('./script.js');

// Mock localStorage globally (เช่นเดียวกับใน jest.setup.js หรือในไฟล์ทดสอบ)
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

beforeEach(() => {
  // Reset mock ของ localStorage ก่อนการทดสอบแต่ละกรณี
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});

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

afterEach(() => {
  // Reset mock หลังการทดสอบแต่ละกรณี (Optional แต่ช่วยให้ทดสอบแยกจากกันได้ดีขึ้น)
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});
