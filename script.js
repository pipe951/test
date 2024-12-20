const { addToCart, removeFromCart, updateQuantity, saveCart } = require('./cart'); // คำสั่งนี้ให้แน่ใจว่าได้ใส่ path ของไฟล์ JS ที่คุณต้องการทดสอบ

describe('Cart functionality', () => {
    let cart;

    beforeEach(() => {
        // สร้าง cart ใหม่ทุกครั้งก่อนการทดสอบ
        cart = [];
        global.localStorage = { setItem: jest.fn(), getItem: jest.fn(() => JSON.stringify(cart)) };
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
});
