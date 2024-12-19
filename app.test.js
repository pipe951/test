// script.js - ฟังก์ชันที่เราต้องการทดสอบ
function sum(a, b) {
  // ตัวอย่างที่ใช้ localStorage
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(a + b);
  localStorage.setItem('cart', JSON.stringify(cart));
  return a + b;
}

module.exports = sum; // export ฟังก์ชัน sum

// app.test.js - การทดสอบใน Jest
beforeAll(() => {
  // Mock localStorage
  global.localStorage = {
    getItem: jest.fn().mockReturnValue('[]'),  // mock ผลลัพธ์ของ getItem
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
});

test('adds 1 + 2 to equal 3', () => {
  // เรียกฟังก์ชัน sum และตรวจสอบผลลัพธ์
  const result = sum(1, 2);
  expect(result).toBe(3);
  
  // ตรวจสอบว่า localStorage.setItem ถูกเรียกด้วยค่าที่ถูกต้อง
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'cart',
    JSON.stringify([3])  // ค่าที่เก็บใน localStorage จะเป็น [3] เนื่องจากการบวก 1 + 2
  );
});
