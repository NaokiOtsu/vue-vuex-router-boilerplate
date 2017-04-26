import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('serve', ['sprites', 'stylesheets', 'scripts'], () => {
  browserSync({
    server: {
      baseDir: config.public_root_path,
    },
    notify: false
  });

  gulp.watch([
    config.public_path.stylesheets + '/**/*.css',
    config.public_path.javascripts + '/**/*.{js, vue}'
  ]).on('change', reload);

  gulp.watch(config.src_path.sprites, ['sprites']);
  gulp.watch(config.src_path.stylesheets, ['stylesheets']);
  gulp.watch(config.src_path.javascripts, ['scripts']);
});

gulp.task('default', ['sprites', 'scripts', 'stylesheets']);
