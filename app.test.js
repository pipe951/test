const sum = require('./script.js'); // ฟังก์ชันที่เราต้องการทดสอบ

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});