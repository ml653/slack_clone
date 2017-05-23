const path = require("path")

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "./bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015","react"]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    modules: [
      path.resolve('./frontend/'),
      path.resolve('./node_modules/')
    ],
    alias: {
      Actions: path.resolve(__dirname, 'frontend/actions/'),
      Components: path.resolve(__dirname, 'frontend/components/'),
      Util: path.resolve(__dirname, 'frontend/util')
    },
    extensions: [".js", ".jsx", "*"]
  }
}
