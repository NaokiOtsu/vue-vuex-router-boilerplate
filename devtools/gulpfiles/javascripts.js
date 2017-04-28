import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config';
import config from '../config';

const dest_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

gulp.task('javascripts', () => {
  return webpackStream(webpackConfig, webpack)
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest(`${dest_path}/javascripts`));
});
