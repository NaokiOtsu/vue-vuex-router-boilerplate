import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

const reload = browserSync.reload;

gulp.task('server', ['clean', 'sprites', 'stylesheets', 'javascripts', 'copy'], () => {
  browserSync({
    server: {
      baseDir: config.DEST_PATH,
    },
    notify: false
  });

  // .html, .css, .js, .vueのwatch
  watch([
    `${config.DEST_PATH}/**/*.html`,
    `${config.DEST_PATH}/stylesheets/**/*.css`,
    `${config.DEST_PATH}/javascripts/**/*.{js, vue}`
  ], () => {
    reload();
  });

  // 画像のwatch
  watch(`${config.SRC_PATH}/images/**/*`, () => {
    runSequence(
      ['clean:images', 'clean:stylesheets'],
      'copy',
      'sprites',
      'stylesheets'
    );
  });

  // htmlのwatch
  // watch(`${config.SRC_PATH}/**/*.html`, () => {
  //   runSequence(
  //     'copy',
  //     () => {
  //       reload();
  //     }
  //   );
  // });

  gulp.watch(`${config.SRC_PATH}/**/*.html`, ['copy']);
  gulp.watch(`${config.SRC_PATH}/stylesheets/**/*.scss`, ['stylesheets']);
  gulp.watch(`${config.SRC_PATH}/javascripts/**/*.js`, ['javascripts']);
});

gulp.task('default', ['sprites', 'javascripts', 'stylesheets']);
