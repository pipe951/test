const { addToCart, removeFromCart, updateQuantity, saveCart } = require('./script'); // ใส่ path ของไฟล์ JS ที่คุณต้องการทดสอบ

describe('Cart functionality', () => {
    let cart;

    // จำลอง DOM ก่อนการทดสอบทุกครั้ง
    beforeEach(() => {
        // สร้าง cart ใหม่ทุกครั้งก่อนการทดสอบ
        cart = [];
        global.localStorage = { setItem: jest.fn(), getItem: jest.fn(() => JSON.stringify(cart)) };
        
        // จำลอง DOM สำหรับปุ่ม checkoutButton ที่มีการเพิ่ม event listener
        document.body.innerHTML = `
            <button id="checkoutButton">Checkout</button>
        `;

        // ใช้ jest.spyOn เพื่อตรวจสอบว่า addEventListener ถูกเรียก
        const checkoutButton = document.getElementById('checkoutButton');
        jest.spyOn(checkoutButton, 'addEventListener');
        
        // โหลดสคริปต์ที่มีการเพิ่ม event listener ให้กับปุ่ม checkoutButton
        require('./script');  // สมมุติว่า script.js ของคุณทำการผูก event listener ในปุ่มนี้
    });

    test('add item to cart', () => {
        addToCart(1, 'Item 1', 100);
        expect(cart.length).toBe(1); // ตรวจสอบว่าเพิ่มสินค้าลงในรถเข็น
        expect(cart[0].id).toBe(1);
        expect(cart[0].name).toBe('Item 1');
        expect(cart[0].price).toBe(100);
    });

    test('remove item from cart', () => {
        addToCart(1, 'Item 1', 100);
        removeFromCart(1);
        expect(cart.length).toBe(0); // ตรวจสอบว่าลบสินค้าจากรถเข็น
    });

    test('update quantity', () => {
        addToCart(1, 'Item 1', 100);
        updateQuantity(1, 3); // อัปเดตจำนวน
        expect(cart[0].quantity).toBe(3);
    });

    test('save cart to localStorage', () => {
        addToCart(1, 'Item 1', 100);
        saveCart();
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));
    });

    test('should add event listener to checkout button', () => {
        const checkoutButton = document.getElementById('checkoutButton');
        
        // ตรวจสอบว่า addEventListener ถูกเรียกด้วยเหตุการณ์ 'click' และฟังก์ชัน
        expect(checkoutButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
});
