import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config';
import config from '../config';

gulp.task('scripts', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(config.public_path.javascripts));
});
