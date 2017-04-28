import webpack from 'webpack';
import config from '../config';

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
      `${config.SRC_PATH}/javascripts/app.js`
    ]
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
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
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: plugins
};
