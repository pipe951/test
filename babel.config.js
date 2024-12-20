// babel.config.js (ใช้ CommonJS syntax)
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react', // ใช้สำหรับ React JSX, ถ้าไม่ใช้ React สามารถลบออกได้
    '@babel/preset-typescript', // หากใช้ TypeScript
  ],
};
