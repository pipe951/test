// Mock localStorage globally
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

// ใช้ beforeEach เพื่อตั้งค่า (หรือรีเซ็ต mock) ก่อนการทดสอบแต่ละครั้ง
beforeEach(() => {
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});

// ใช้ afterEach เพื่อล้างข้อมูลหลังการทดสอบแต่ละครั้ง
afterEach(() => {
  localStorage.getItem.mockReset();
  localStorage.setItem.mockReset();
  localStorage.removeItem.mockReset();
  localStorage.clear.mockReset();
});
