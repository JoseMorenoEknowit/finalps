module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  "transpileDependencies": [
    "vsadasdy"
  ],
  productionSourceMap: false,
  pwa: {
    name: 'Lutimi main',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    msTileColor: '#4A90E2',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}