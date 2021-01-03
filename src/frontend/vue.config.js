const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: { '@': path.join(__dirname, 'src') },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  outputDir: path.resolve(__dirname, '../' + 'main/resources/static'),
};
