const webpack = require('webpack')
const path = require('path')
const vendors = [
  'react',
  'react-dom'
]
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      path: 'dist/manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
}
