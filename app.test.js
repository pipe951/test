// app.test.js (ใช้ CommonJS syntax)
const { addToCart, removeFromCart, updateCartCount } = require('./script.js');

// Mock localStorage globally
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

  // จำลอง checkoutButton element (ตรวจสอบว่า HTML ถูกต้อง)
  document.body.innerHTML = `
    <div>
      <button id="checkoutButton">Checkout</button>
    </div>
  `;
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

// ทดสอบฟังก์ชันที่เกี่ยวข้องกับ checkoutButton
test('checkoutButton triggers event correctly', () => {
  const button = document.getElementById('checkoutButton');
  const mockFunction = jest.fn();

  // ตรวจสอบว่าปุ่มถูกสร้างแล้วจริง
  expect(button).not.toBeNull();

  button.addEventListener('click', mockFunction);
  button.click(); // จำลองการคลิกปุ่ม

  expect(mockFunction).toHaveBeenCalled();
});

afterEach(() => {
  // Reset mock หลังการทดสอบแต่ละกรณี
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});
