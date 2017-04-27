import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const reload = browserSync.reload;

gulp.task('server', ['clean', 'sprites', 'stylesheets', 'eslint', 'javascripts', 'copy'], () => {
  browserSync({
    server: {
      baseDir: config.DEST_PATH,
    },
    notify: false
  });

  watch([
    `${config.DEST_PATH}/**/*.html`,
    `${config.DEST_PATH}/stylesheets/**/*.css`,
    `${config.DEST_PATH}/javascripts/**/*.{js, vue}`
  ], () => {
    reload();
  });

  watch(`${config.SRC_PATH}/images/sprites/**/*`, () => {
    runSequence(
      ['clean:images', 'clean:stylesheets'],
      'copy',
      'sprites',
      'stylesheets'
    );
  });

  gulp.watch(`${config.SRC_PATH}/stylesheets/**/*.scss`, ['stylesheets']);
  gulp.watch(`${config.SRC_PATH}/javascripts/**/*.js`, ['eslint', 'javascripts']);
});

gulp.task('default', ['sprites', 'javascripts', 'stylesheets']);
