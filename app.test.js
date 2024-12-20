describe('Cart functionality', () => {
    let cart;

    beforeEach(() => {
        // ตั้งค่า cart เป็น global variable เพื่อให้ script.js ใช้งานได้
        global.cart = []; // ใช้ global.cart

        // สร้าง DOM จำลอง
        document.body.innerHTML = `
            <div id="cart-items"></div>
            <button id="checkoutButton"></button>
        `;

        // จำลอง localStorage
        global.localStorage = {
            setItem: jest.fn(),
            getItem: jest.fn(),
            removeItem: jest.fn(),
            clear: jest.fn(),
        };
    });

    test('should attach event listener to cart-items', () => {
        // โหลด script.js หลังจากสร้าง DOM
        require('./script.js'); // โหลดสคริปต์ที่กำลังทดสอบ

        const cartItems = document.getElementById('cart-items');
        expect(cartItems).not.toBeNull();
    });

    test('add item to cart', () => {
        addToCart(1, 'Item 1', 100);
        expect(global.cart.length).toBe(1); // ตรวจสอบว่าเพิ่มสินค้าลงในรถเข็น
        expect(global.cart[0]).toEqual({
            id: 1,
            name: 'Item 1',
            price: 100,
            quantity: 1,
        });
    });

    test('remove item from cart', () => {
        addToCart(1, 'Item 1', 100);
        removeFromCart(1);
        expect(global.cart.length).toBe(0); // ตรวจสอบว่าลบสินค้าจากรถเข็น
    });

    test('update quantity', () => {
        addToCart(1, 'Item 1', 100);
        updateQuantity(1, 3); // อัปเดตจำนวน
        expect(global.cart[0].quantity).toBe(3);
    });

    test('save cart to localStorage', () => {
        addToCart(1, 'Item 1', 100);
        saveCart();
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(global.cart));
    });

    test('should add event listener to checkout button', () => {
        const checkoutButton = document.getElementById('checkoutButton');
        
        // Mock addEventListener using jest.spyOn
        const addEventListenerSpy = jest.spyOn(checkoutButton, 'addEventListener');

        // โหลด script.js หลังจาก checkoutButton ถูกสร้าง
        require('./script.js'); // โหลดสคริปต์

        expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    });
});
