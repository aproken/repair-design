const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var css = require('gulp-mini-css');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

//gulp css min
gulp.task('css', function(){
    gulp.src(dest+'/*.css')
        .pipe(css({ext:'-min.css'}))
        .pipe(gulp.dest(dest));
});
