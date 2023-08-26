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
  // pwa: {
  //   dest: "public", // or "out" if you're using Next.js 12+
  //   // register: true, 
  //   // skipWaiting: true, 
  //   // disable: process.env.NODE_ENV === 'development'
  // },
  // other Next.js configuration options here
});
