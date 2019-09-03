const
    { src, dest, task, watch, series } = require('gulp'),
    // Gulp Plugins
    cleanCss = require('gulp-clean-css'),
    sass = require('gulp-sass');

task('sass', function () {
    return src('./src/scss/template.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(dest('./public/css'));
});

task('sass:watch', function () {
    watch('./src/scss/**/*.scss', series('sass'));
});