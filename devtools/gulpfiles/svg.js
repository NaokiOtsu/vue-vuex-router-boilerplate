import gulp from 'gulp';
import svgmin from 'gulp-svgmin'
import svgstore from 'gulp-svgstore'
import cheerio from 'gulp-cheerio'
import rename from 'gulp-rename'
import config from '../config'

const dest_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

gulp.task('svg', function () {
  return gulp.src(`${config.SRC_PATH}/svg/**/*.svg`)
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio({
      run: ($) => {
        $('svg').addClass('hide')
        $('[fill]').removeAttr('fill')
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename({
      basename: 'sprite'
    }))
    .pipe(gulp.dest(`${dest_path}/svg`));
});
