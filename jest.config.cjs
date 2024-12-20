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
  },
};
