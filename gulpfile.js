var {src, dest, watch} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var css = require('gulp-mini-css');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./sass/**/*.sass", serveSass);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
};

//Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;
//gulp css min
gulp.task('css', function(){
    gulp.src(dest+'/*.css')
        .pipe(css({ext:'-min.css'}))
        .pipe(gulp.dest(dest));
});
