/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // other Next.js configuration options here
});

// next.config.js

// module.exports = {
//   webpack(config) {
//     config.resolve.modules.push(__dirname);
//     return config;
//   }, 
// };
