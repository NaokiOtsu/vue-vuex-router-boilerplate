import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', (callback) => {
  return del(
    [
      `${config.DEST_PATH}/images/**/*`,
      `${config.DEST_PATH}/javascripts/**/*`,
      `${config.DEST_PATH}/stylesheets/**/*`
    ],
    { force: true },
    callback
  );
});
