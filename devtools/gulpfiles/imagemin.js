import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegoptim from 'imagemin-jpegoptim';
import config from '../config';

gulp.task('jpegmin', () => {
  return gulp.src(`${config.PUBLIC_PATH}/**/*.+(jpg|jpeg)`)
    .pipe(imagemin({
      use: [imageminJpegoptim({ progressive: true, max: 100 })]
    }))
    .pipe(gulp.dest(config.PUBLIC_PATH));
});

gulp.task('pngmin', () => {
  return gulp.src(`${config.PUBLIC_PATH}/**/*.+(png|gif|svg)`)
    .pipe(imagemin({
      use: [imageminPngquant({ quality: 100, speed: 1 })]
    }))
    .pipe(gulp.dest(config.PUBLIC_PATH));
});
