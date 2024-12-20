// jest.setup.js

// Mock localStorage globally
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock document.getElementById globally
global.document.getElementById = jest.fn().mockImplementation((id) => {
  if (id === 'cart-items') {
    return {
      addEventListener: jest.fn(),  // mock addEventListener
      innerHTML: '',  // Mock innerHTML
    };
  }
  if (id === 'cart-total') {
    return {
      textContent: '',  // Mock textContent
    };
  }
  if (id === 'cart-count') {
    return {
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
      },
      textContent: '',  // Mock textContent for cart-count
    };
  }
  if (id === 'checkoutButton') {
    return {
      addEventListener: jest.fn(),  // mock addEventListener
    };
  }
  // Return null for any other ID (no action needed for this test)
  return null;
});
