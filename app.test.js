const addToCart = require('./script.js');  // ฟังก์ชันที่เราต้องการทดสอบ

// Mock localStorage
beforeAll(() => {
  global.localStorage = {
    getItem: jest.fn().mockReturnValue('[]'),  // Mock ค่าผลลัพธ์เริ่มต้น
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
});

test('addToCart adds item to the cart', () => {
  // เรียกใช้ฟังก์ชัน addToCart
  addToCart(1, 'Product 1', 100); 

  // ตรวจสอบว่า localStorage.setItem ถูกเรียกด้วยค่าที่ถูกต้อง
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'cart', 
    JSON.stringify([{ id: 1, name: 'Product 1', price: 100, quantity: 1 }])
  );
});
