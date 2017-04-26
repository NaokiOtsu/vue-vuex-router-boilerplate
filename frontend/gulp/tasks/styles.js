import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';

gulp.task('stylesheets', function () {
  return gulp.src(config.src_path.stylesheets + '/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: config.is_production ? 'compressed' : 'expanded',
      precision: 10,
      includePaths: ['.']
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4', 'ios >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest(config.public_path.stylesheets));
});
