// Mocking global methods and localStorage for testing

// Mocking localStorage
global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([])),
  setItem: jest.fn(),
};

// Mocking document.getElementById for all elements
global.document.getElementById = jest.fn().mockImplementation((id) => {
  const mockElement = { addEventListener: jest.fn() };  // Mock addEventListener
  if (id === 'cart-count') {
    return { 
      classList: { add: jest.fn(), remove: jest.fn() }, 
      textContent: ''
    };
  } else if (id === 'cart-items') {
    return { innerHTML: '' };
  } else if (id === 'cart-total') {
    return { textContent: '' };
  } else if (id === 'checkoutButton') {
    return mockElement;  // Return mocked element for checkoutButton
  }

  return mockElement;  // Default return for other elements
});
