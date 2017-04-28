import gulp from 'gulp';
import imagemin from './imagemin';
import runSequence from 'run-sequence';

gulp.task('build', (callback) => {
  runSequence(
    'clean',
    [
      'sprites',
      'copy'
    ],
    [
      'jpegmin',
      'pngmin',
      'javascripts',
      'stylesheets'
    ],
    callback
  );
});
