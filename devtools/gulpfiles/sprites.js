import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import config from '../config';

const dest_sprite_path = config.is_production ? config.PUBLIC_PATH : config.DEST_PATH;

const getDirectorys = dir_path => {
  try {
    return fs.readdirSync(dir_path).filter(file => {
      return fs.statSync(path.join(dir_path, file)).isDirectory();
    });
  } catch (error) {
    return false;
  }
}

gulp.task('sprites', (callback) => {
  const sprite_path = `${config.SRC_PATH}/images/sprites`;
  const directorys = getDirectorys(sprite_path);
  if (!directorys) return;

  directorys.forEach(directory => {
    const sprite_data = gulp.src(`${sprite_path}/${directory}/*.png`)
      .pipe(spritesmith({
        imgName: `sprite_${directory}.png`,
        imgPath: `/images/sprite_${directory}.png`,
        cssName: `_sprite_${directory}.scss`,
        cssFormat: 'scss',
        algorithm: 'top-down',
        algorithmOpts: {
          sort: false
        },
        padding: 8
      }));
    
    sprite_data.img
      .pipe(gulp.dest(`${dest_sprite_path}/images`));
    
    sprite_data.css.pipe(gulp.dest(`${config.SRC_PATH}/stylesheets/sprites`)).on('end', () => {
      callback();
    });
  });
});
