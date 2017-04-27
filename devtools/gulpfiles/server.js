import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('server', ['sprites', 'stylesheets', 'javascripts'], () => {
  browserSync({
    server: {
      baseDir: config.DEST_PATH,
    },
    notify: false
  });

  gulp.watch([
    `${config.DEST_PATH}/stylesheets/**/*.css`,
    `${config.DEST_PATH}/javascripts/**/*.{js, vue}`
  ]).on('change', reload);

  gulp.watch(`${config.SRC_PATH}/images/sprites`, ['sprites']);
  gulp.watch(`${config.SRC_PATH}/stylesheets`, ['stylesheets']);
  gulp.watch(`${config.SRC_PATH}/javascripts`, ['javascripts']);
});

gulp.task('default', ['sprites', 'javascripts', 'stylesheets']);
