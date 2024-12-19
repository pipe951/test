// eslint.config.js
import { defineConfig } from 'eslint';

export default defineConfig({
  languageOptions: {
    globals: {
      // ตัวแปร global ที่ต้องการใช้ในโค้ด เช่น:
      // window: "readonly",
      // process: "readonly",
    },
    parserOptions: {
      ecmaVersion: 2020, // ใช้ ECMAScript เวอร์ชัน 2020
    },
  },
  extends: [
    'eslint:recommended', // ใช้คำแนะนำจาก ESLint
  ],
  rules: {
    // เพิ่มกฎที่ต้องการที่นี่
  },
});
