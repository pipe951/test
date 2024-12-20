// jest.setup.js
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock document.getElementById globally
global.document.getElementById = jest.fn().mockImplementation((id) => {
  if (id === 'checkoutButton') {
    return {
      addEventListener: jest.fn(),  // mock addEventListener
    };
  }
  // Mock elements for other IDs
  return null;
});
