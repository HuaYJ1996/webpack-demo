const path = require('path')
const testPlugin = require('../plugin/test-plugin')
const t = new testPlugin()
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/, use: '../loader/test-loader' },
        ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
    },
    plugins: [
        t
    ]
}