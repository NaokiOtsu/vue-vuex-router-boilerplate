import gulp from 'gulp';
import del from 'del';
import config from '../config';

const dir_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

gulp.task('clean', (callback) => {
  return del(
    [
      `${dir_path}/images/**/*`,
      `${dir_path}/javascripts/**/*`,
      `${dir_path}/stylesheets/**/*`
    ],
    { force: true },
    callback
  );
});

gulp.task('clean:images', (callback) => {
  return del(
    `${dir_path}/images/**/*`,
    { force: true },
    callback
  );
});

gulp.task('clean:stylesheets', (callback) => {
  return del(
    `${dir_path}/stylesheets/**/*`,
    { force: true },
    callback
  );
});

gulp.task('clean:javascripts', (callback) => {
  return del(
    `${dir_path}/javascripts/**/*`,
    { force: true },
    callback
  );
});
