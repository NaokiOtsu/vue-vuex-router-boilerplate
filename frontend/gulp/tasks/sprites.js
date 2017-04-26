import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import config from '../config';

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
  const sprite_path = config.src_path.sprites;
  const directorys = getDirectorys(sprite_path);
  if (!directorys) return;

  directorys.forEach(directory => {
    const sprite_data = gulp.src(sprite_path + '/' + directory + '/*.png')
      .pipe(spritesmith({
        imgName: 'sprite_' + directory + '.png',
        imgPath: '/images/sprite_' + directory + '.png',
        cssName: '_sprite_' + directory + '.scss',
        cssFormat: 'scss',
        algorithm: 'top-down',
        algorithmOpts: {
          sort: false
        },
        padding: 8
      }));
    
    sprite_data.img
      .pipe(gulp.dest(config.public_path.sprites));
    
    sprite_data.css.pipe(gulp.dest('./src/stylesheets/sprites')).on('end', () => {
      callback();
    });
  });
});

