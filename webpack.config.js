const path = require('path')
const testPlugin = require('./lib/plugin/test-plugin')
const webpack = require('webpack')
// const t = new testPlugin()
module.exports = {
  entry: './demo/index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.[jt]sx?$/, use: ['babel-loader'] },
    ]
  },
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'WTF'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline:true,
    hot:true
  },
  plugins: [
    // t
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/manifest.json'),
    }),
  ]
}
