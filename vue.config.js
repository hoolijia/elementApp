module.exports = {
  outputDir: 'ele-app',
  assetsDir: 'assets',
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'https://eleme1-october.herokuapp.com/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
}
