import gulp from 'gulp';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import config from '../config';

gulp.task('eslint', () => {
  return gulp.src(`${config.SRC_PATH}/javascripts/**/*.js`)
    .pipe(plumber({
      errorHandler: error => {
        console.error('error.plugin', error.plugin);
        console.error('error.message', error.message);
      }
    }))
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
});
