// eslint.config.js
module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended', // ใช้คำแนะนำพื้นฐานจาก ESLint
  ],
  parserOptions: {
    ecmaVersion: 2020, // ใช้เวอร์ชัน ECMAScript 2020
  },
  rules: {
    // เพิ่มกฎที่ต้องการได้ที่นี่
  },
};
