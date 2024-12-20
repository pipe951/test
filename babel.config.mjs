// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react', // สำหรับ React JSX, ถ้าไม่ใช้ React สามารถลบออกได้
    '@babel/preset-typescript', // หากใช้ TypeScript
  ],
};
