// eslint.config.js
export default [
  {
    languageOptions: {
      globals: {
        window: 'readonly',  // ตัวแปร global สำหรับเบราว์เซอร์
        document: 'readonly',
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'off',  // กฎการใช้ console
      // กฎอื่น ๆ ที่ต้องการ
    },
  },
];
