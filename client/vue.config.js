module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: true,
  // 配置代理
  devServer: {
    port: 8088,
    proxy: {
      '/': {
        // target: 'http://10.1.69.173:9999',
        // target: 'http://10.1.28.141',
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: false
      }
    }
  }
}