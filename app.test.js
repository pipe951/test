const { addToCart, removeFromCart, updateQuantity, saveCart } = require('./script'); // ใส่ path ของไฟล์ JS ที่คุณต้องการทดสอบ

describe('Cart functionality', () => {
    let cart;

    // จำลอง DOM ก่อนการทดสอบทุกครั้ง
    beforeEach(() => {
    document.body.innerHTML = `
        <div id="cart-items"></div>
    `;
});

test('should attach event listener to cart-items', () => {
    require('./script.js'); // โหลดสคริปต์ที่คุณกำลังทดสอบ
    const cartItems = document.getElementById('cart-items');
    expect(cartItems).not.toBeNull();
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
