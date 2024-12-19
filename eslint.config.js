// eslint.config.js
module.exports = {
  env: {
    browser: true,  // กำหนดสภาพแวดล้อมเป็นเบราว์เซอร์
    node: true,     // กำหนดสภาพแวดล้อมเป็น Node.js
    es2021: true,   // กำหนดการรองรับ ECMAScript 2021
  },
  parserOptions: {
    ecmaVersion: 2020,  // รองรับ ES2020
    sourceType: 'module',  // กำหนดให้สามารถใช้โมดูล ES6
  },
  extends: [
    'eslint:recommended',  // ใช้กฎมาตรฐานของ ESLint
  ],
  rules: {
    // เพิ่มกฎที่ต้องการได้ที่นี่
  },
};
