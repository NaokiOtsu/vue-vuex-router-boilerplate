import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import historyFallback from 'connect-history-api-fallback'

const reload = browserSync.reload;

gulp.task('server', () => {
  runSequence(
    'clean',
    [
      'sprites',
      'copy'
    ],
    [
      'javascripts',
      'stylesheets'
    ],
    () => {
      browserSync({
        server: {
          baseDir: config.is_production ? config.PUBLIC_PATH : config.DEST_PATH,
          middleware: [
            historyFallback()
          ]
        },
        notify: false
      });

      // gulp watch 開発の時だけwatchする(本番確認時はソースは触らず動作確認のみにしたく)
      if (!config.is_production) {
        // .html, .css, .js, .vueのwatch
        watch([
          `${config.DEST_PATH}/**/*.html`,
          `${config.DEST_PATH}/stylesheets/**/*.css`,
          `${config.DEST_PATH}/javascripts/**/*.{js,vue}`
        ], () => {
          reload();
        });

        // 画像のwatch
        watch(`${config.SRC_PATH}/images/**/*`, () => {
          runSequence(
            ['clean:images', 'clean:stylesheets'],
            'copy',
            'sprites',
            'stylesheets'
          );
        });

        gulp.watch(`${config.SRC_PATH}/**/*.html`, ['copy']);
        gulp.watch(`${config.SRC_PATH}/stylesheets/**/*.scss`, ['stylesheets']);
        gulp.watch(`${config.SRC_PATH}/javascripts/**/*.{js,vue}`, ['javascripts']);
      }
    }
  );
});
