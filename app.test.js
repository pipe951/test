const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  updateQuantity, 
  saveCart, 
  displayCart, 
  updateCartCount 
} = require('./script');  // สมมติว่า script.js ถูก export ฟังก์ชันต่างๆ ไว้

// Mocking localStorage
beforeAll(() => {
  global.localStorage = {
    getItem: jest.fn(() => JSON.stringify([])),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  // Mocking document.getElementById
  global.document.getElementById = jest.fn().mockImplementation((id) => {
    if (id === 'cart-count') {
      return { 
        classList: { add: jest.fn(), remove: jest.fn() }, 
        textContent: '' 
      };
    } else if (id === 'cart-items') {
      return { innerHTML: '' }; // Mock empty cart items
    } else if (id === 'cart-total') {
      return { textContent: '' }; // Mock empty cart total
    } else if (id === 'checkoutButton') {
      return {
        addEventListener: jest.fn(),  // Mock addEventListener
      };
    }
    return null;
  });
});

describe('Cart functionality tests', () => {
  beforeEach(() => {
    // Clear cart before each test
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
    jest.clearAllMocks();  // Clear mocks before each test to ensure clean state
  });

  test('addToCart should add an item to the cart', () => {
    addToCart(1, 'Product A', 100);  // Add product A to cart
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);  // Check that saveCart was called
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
  });

  test('addToCart should not add an item if already in cart', () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
    addToCart(1, 'Product A', 100);  // Try to add the same item again
    expect(localStorage.setItem).not.toHaveBeenCalled();  // Ensure saveCart is not called
    expect(window.alert).toHaveBeenCalledWith('สินค้านี้อยู่ในรถเข็นแล้ว!');  // Check if alert is triggered
  });

  test('removeFromCart should remove an item from the cart', () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
    removeFromCart(1);  // Remove product A from cart
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));  // Ensure cart is empty
  });

  test('increaseQuantity should increase the quantity of an item', () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
    increaseQuantity(1);  // Increase quantity of product A
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 2 }]));
  });

  test('decreaseQuantity should decrease the quantity of an item', () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 2 }]));
    decreaseQuantity(1);  // Decrease quantity of product A
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
  });

  test('updateQuantity should update the quantity of an item', () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 1 }]));
    updateQuantity(1, 3);  // Update quantity of product A to 3
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ id: 1, name: 'Product A', price: 100, quantity: 3 }]));
  });

  test('saveCart should save the cart to localStorage', () => {
    const cart = [{ id: 1, name: 'Product A', price: 100, quantity: 1 }];
    saveCart(cart);  // Save the cart
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(cart));  // Ensure saveCart works as expected
  });
});

// Example of testing displayCart (UI testing would require jsdom or other tools)
test('displayCart should display empty cart message when cart is empty', () => {
  global.localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));
  const cartItems = { innerHTML: '' };
  const cartTotal = { textContent: '' };
  displayCart(cartItems, cartTotal);
  expect(cartItems.innerHTML).toBe('<p class="cart-empty">ไม่มีสินค้าในรถเข็น</p>');
  expect(cartTotal.textContent).toBe('0.00');
});

// Testing checkoutButton event listener
test('checkoutButton should add event listener for click', () => {
  // Trigger the function that attaches the event listener to checkoutButton
  const button = document.getElementById('checkoutButton');

  // Check if addEventListener was called with 'click' and a function
  expect(button.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
});
