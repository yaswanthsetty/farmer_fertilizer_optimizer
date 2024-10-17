// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/maps/api',
    createProxyMiddleware({
      target: 'https://maps.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/maps/api': '', // Remove /maps/api from the request URL
      },
    })
  );
};
