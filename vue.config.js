module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ol-vue/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Vue.js + Openlayers',
    },
  },
  devServer: {
    host: "localhost"
  }
}
