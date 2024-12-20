// Mock localStorage globally
global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([])),  // mock localStorage.getItem ให้คืนค่า array เปล่า
  setItem: jest.fn(),  // mock localStorage.setItem
  removeItem: jest.fn(),  // mock localStorage.removeItem
  clear: jest.fn(),  // mock localStorage.clear
};

// Mocking document.getElementById
global.document.getElementById = jest.fn().mockImplementation((id) => {
  if (id === 'cart-count') {
    return { 
      classList: { add: jest.fn(), remove: jest.fn() },  // Mock classList.add and remove
      textContent: '',  // Mock textContent
    };
  } else if (id === 'cart-items') {
    return { innerHTML: '' };  // Mock innerHTML
  } else if (id === 'cart-total') {
    return { textContent: '' };  // Mock textContent
  } else if (id === 'checkoutButton') {
    return {
      addEventListener: jest.fn(),  // Mock addEventListener
    };
  }
  return null;  // Default return for other ids
});

// Mocking global functions that are used in tests
global.updateCartCount = jest.fn();  // Mock updateCartCount
global.displayCart = jest.fn();  // Mock displayCart
