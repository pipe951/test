// jest.config.js (ใช้ CommonJS syntax)
module.exports = {
  testResultsProcessor: "jest-junit",  // ใช้ jest-junit สำหรับแปลงผลทดสอบเป็น XML
  reporters: [
    "default",  // ใช้ reporter ปกติ
    [
      "jest-junit",  // กำหนดให้ jest-junit ใช้ผลทดสอบเป็น XML
      {
        outputDirectory: "./test-results",  // ที่เก็บไฟล์ผลทดสอบ
        outputName: "TESTS-results.xml"     // ชื่อไฟล์ผลทดสอบ
      }
    ]
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // แปลงไฟล์ JavaScript หรือ JSX
    '^.+\\.ts$': 'ts-jest',      // แปลงไฟล์ TypeScript
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],  // รองรับการใช้ไฟล์ JavaScript, JSX, TypeScript, TSX
  setupFiles: ['./jest.setup.js'],  // เพิ่มไฟล์ setup สำหรับ mock global variables
  testEnvironment: 'jsdom', // ใช้ jsdom สำหรับจำลอง DOM เช่น document และ window
};
