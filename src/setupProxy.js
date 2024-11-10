const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://portfolio.getapi.my.id/api/data/',
      changeOrigin: true,
    })
  );
};