var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS    =  require('gulp-clean-css'),
    exec = require('child_process').exec,
    util = require('gulp-util')
    ;

var config = {
  jsPattern: 'js/**/*.js',
  sassPattern: 'scss/**/*.*',
  cssPath: 'css',
  dev: !!util.env.dev
};

// Compile SCSS files to CSS
gulp.task("scss", function () {
  var stream = gulp.src(config.sassPattern)
    .pipe(sass({
      outputStyle : config.dev ? "expanded" : "compressed"
    }))
    .pipe(autoprefixer({
      browsers : ["last 20 versions"]
    }))
    .pipe(config.dev ? util.noop() : cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest(config.cssPath))
  ;

});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("scss/**/*", ["scss"]);
});

gulp.task("default", ["watch"]);
