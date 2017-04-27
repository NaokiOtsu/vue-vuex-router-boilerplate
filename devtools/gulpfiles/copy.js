import gulp from 'gulp';
import changed from 'gulp-changed';
import ignore from 'gulp-ignore';
import config from '../config';

const copy_base_path = config.is_production ? config.DEST_PATH : config.SRC_PATH;
const copy_dest_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

gulp.task('copy', () => {
  return gulp.src([
    `${copy_base_path}/**/*`,
    `${copy_base_path}/**/.*`,
    `!${copy_base_path}/**/*.js`,
    `!${copy_base_path}/**/*.scss`,
    `!${copy_base_path}/**/*.ai`,
    `!${copy_base_path}/**/*.sketch`,
    `!${copy_base_path}/**/*.svg`,
    `!${copy_base_path}/**/*.fs`,
    `!${copy_base_path}/**/_*`,
    `!${copy_base_path}/**/sprites/*/*.+(jpg|jpeg|png|gif)`,
    `!${copy_base_path}/**/iconfont/*/*.svg`,
    `!${copy_base_path}/**/iconfont/*.html`,
    `!${copy_base_path}/**/iconfont/*.css`,
    `!${copy_base_path}/**/.DS_Store`
  ])
    .pipe(changed(copy_dest_path))
    .pipe(ignore.include({ isFile: true }))
    .pipe(gulp.dest(copy_dest_path));
});
