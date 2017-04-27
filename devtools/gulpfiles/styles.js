import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import config from '../config';

const dest_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

gulp.task('stylesheets', function () {
  return gulp.src(`${config.SRC_PATH}/stylesheets/**/*.scss`)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass({
      outputStyle: config.is_production ? 'compressed' : 'expanded',
      precision: 10,
      includePaths: ['.']
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4', 'ios >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest(`${dest_path}/stylesheets`));
});
