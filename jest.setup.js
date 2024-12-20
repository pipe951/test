// Mocking localStorage globally
global.localStorage = {
  getItem: jest.fn().mockReturnValue(JSON.stringify([])),  // mock empty cart
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mocking DOM methods to simulate interaction with the page
global.document.getElementById = jest.fn().mockImplementation((id) => {
  if (id === 'cart-items') {
    return { innerHTML: '' };  // mock cart-items
  }
  if (id === 'cart-total') {
    return { textContent: '' };  // mock cart-total
  }
  if (id === 'checkoutButton') {
    return {
      addEventListener: jest.fn(),  // mock addEventListener
    };
  }
  return null;
});

// Mocking other DOM properties if needed, such as classList
global.Element.prototype.classList = {
  add: jest.fn(),
  remove: jest.fn(),
};

// Mocking functions related to cart actions
global.updateCartCount = jest.fn();
global.displayCart = jest.fn();
