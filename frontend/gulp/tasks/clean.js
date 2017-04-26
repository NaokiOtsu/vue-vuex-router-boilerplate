import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', (callback) => {
  return del(
    [
      config.public_path.images      + '/**/*',
      config.public_path.javascripts + '/**/*',
      config.public_path.stylesheets + '/**/*'
    ],
    { force: true },
    callback
  );
});
