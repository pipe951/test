// app.test.js (ใช้ CommonJS syntax)
const { addToCart, removeFromCart, updateCartCount } = require('./script.js');

// Mock localStorage globally
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

// จำลองการตั้งค่า DOM ก่อนการทดสอบ
beforeEach(() => {
  // กำหนด HTML ใน DOM สำหรับทดสอบ
  document.body.innerHTML = `
    <div>
      <button id="checkoutButton">Checkout</button>
    </div>
  `;

  // ตั้งค่าฟังก์ชัน addEventListener เพื่อหลีกเลี่ยงการทำงานจริง
  const checkoutButton = document.getElementById('checkoutButton');
  checkoutButton.addEventListener = jest.fn();
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

  // เพิ่ม event listener ให้กับปุ่ม
  button.addEventListener('click', mockFunction);
  button.click(); // จำลองการคลิกปุ่ม

  // ตรวจสอบว่า mockFunction ถูกเรียก
  expect(mockFunction).toHaveBeenCalled();
});

afterEach(() => {
  // Reset mock หลังการทดสอบแต่ละกรณี
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});
