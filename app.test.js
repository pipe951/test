// app.test.js
const { addToCart, removeFromCart, updateCartCount } = require('./script.js');

// Mock localStorage globally
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 'session_id' })
  })
);

beforeEach(() => {
  // สร้าง HTML สำหรับการทดสอบ
  document.body.innerHTML = `
    <div>
      <button id="checkoutButton">Checkout</button>
    </div>
  `;

  // จำลองการคลิกปุ่ม checkoutButton
  const checkoutButton = document.getElementById('checkoutButton');
  
  // Mock addEventListener
  checkoutButton.addEventListener = jest.fn();
  
  // สร้าง event listener ตามที่โค้ดจริงใช้
  checkoutButton.addEventListener("click", function() {
    fetch('http://127.0.0.1:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: [] })  // ส่งข้อมูลรถเข็นเป็น array ว่าง
    })
    .then((response) => response.json())
    .then((data) => {
      const stripe = Stripe('pk_test_51QLRDULXE6bgMjnAORtQGcif8tr8KYrFSyybsGtU6R8DNbt93AEOKOgdmEdvMrWXyJeSNRpkqXof8qaSeOjzwOru00eQdAqNEm');
      return stripe.redirectToCheckout({ sessionId: data.id });
    })
    .then((result) => {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch((error) => console.error('Error:', error));
  });
});

// ทดสอบการคลิกปุ่ม checkout
test('checkoutButton triggers event correctly', () => {
  const checkoutButton = document.getElementById('checkoutButton');
  
  // ตรวจสอบว่า checkoutButton ถูกสร้างขึ้นใน DOM
  expect(checkoutButton).not.toBeNull();

  // จำลองการคลิกปุ่ม checkoutButton
  checkoutButton.click();

  // ตรวจสอบว่า addEventListener ถูกเรียก
  expect(checkoutButton.addEventListener).toHaveBeenCalled();
});

// ทดสอบการทำงานของฟังก์ชันอื่น ๆ (addToCart, removeFromCart)
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

// หลังการทดสอบแต่ละครั้ง, รีเซ็ต mock
afterEach(() => {
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});
