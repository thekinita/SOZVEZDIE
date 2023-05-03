const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    filename: path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize:512000
  },
  devServer: {
    port: 7777,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'ТК СОЗВЕЗДИЕ',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}