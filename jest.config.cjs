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
    '^.+\\.js$': 'babel-jest', // ใช้ babel-jest แปลงไฟล์ .js
  },
  extensionsToTreatAsEsm: ['.js'],  // ตั้งค่าให้ไฟล์ .js เป็น ESM
};