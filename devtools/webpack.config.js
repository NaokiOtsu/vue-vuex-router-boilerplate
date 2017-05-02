import webpack from 'webpack';
import config from './config';

module.exports = {
  entry: {
    app: `${config.SRC_PATH}/javascripts/app.js`
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|vue)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: '../.eslintrc'
            }
          }
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /.vue$/,
        use: [
          { loader: 'vue-loader' }
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

  plugins: config.is_production
    ? [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings    : false,
          drop_console: true
        }
      })
    ]
    : []
};
