module.exports = {
  entry: {
    app: './app/index.js',
    vendor: ['jquery']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: 'dist/'
  }
}
