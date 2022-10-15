const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: { '@': path.join(__dirname, 'src') },
    },
  },
  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  outputDir: path.resolve(__dirname, '../' + 'main/resources/static'),
};
