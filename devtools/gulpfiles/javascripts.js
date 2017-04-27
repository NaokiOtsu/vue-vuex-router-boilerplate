import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';
import config from '../config';

gulp.task('javascripts', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(`${config.DEST_PATH}/javascripts`));
});
