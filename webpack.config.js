module.exports = {
  entry: {
    app: './app/app.js',
    vendor: ['jquery', 'react', 'react-dom']
  },
  output: {
    filename: '[name].bundle.js',
    path: 'dist/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }]
  }
}
