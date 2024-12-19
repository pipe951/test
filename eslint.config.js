// eslint.config.js
const { defineConfig } = require('eslint');

module.exports = defineConfig({
  languageOptions: {
    globals: {
      // กำหนด global variables ที่ต้องการ
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // เพิ่มกฎที่ต้องการ
  },
});
