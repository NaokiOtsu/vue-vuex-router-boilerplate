import webpack from 'webpack';
import config from './config';

const plugins = [];

if(config.is_production) {
  plugins.push(
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings    : false,
        drop_console: true
      }
    })
  );
}

module.exports = {
  entry: {
    app: [
      'vue',
      config.src_path + '/javascripts/app.js'
    ]
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue']
  },

  plugins: plugins
};
