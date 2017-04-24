import path from 'path';
import config from './config';
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';
import del from 'del';

const SRC_PATH = {
  images      : config.src_path + '/images',
  stylesheets : config.src_path + '/stylesheets/**/*.scss',
  javascripts : config.src_path + '/javascripts'
};

const PUBLIC_PATH = {
  images      : config.public_path + '/images',
  stylesheets : config.public_path + '/stylesheets',
  javascripts : config.public_path + '/javascripts'
};

gulp.task('build', (callback) => {
  runSequence(
    'clean',
    [
      'scripts',
      'stylesheets'
    ],
    callback
  );
});

gulp.task('clean', (callback) => {
  return del(
    [
      PUBLIC_PATH.images      + '/**/*',
      PUBLIC_PATH.javascripts + '/**/*',
      PUBLIC_PATH.stylesheets + '/**/*'
    ],
    { force: true },
    callback
  );
});

gulp.task('scripts', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(PUBLIC_PATH.javascripts));
});

gulp.task('stylesheets', function () {
  return gulp.src(SRC_PATH.stylesheets)
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
    .pipe(gulp.dest(PUBLIC_PATH.stylesheets));
});

gulp.task('default', ['scripts', 'stylesheets']);
