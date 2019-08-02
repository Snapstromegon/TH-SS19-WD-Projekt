const
    { src, dest, task, watch, series } = require('gulp'),
    // Gulp Plugins
    sass = require('gulp-sass'),
    webp = require('gulp-webp');

sass.compiler = require('node-sass');

task('sass', function () {
    return src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./public/css'));
});

task('sass:watch', function () {
    watch('./src/scss/*.scss', series('sass'));
});

task('webp', function () {
    return src('./src/assets/images/*.jpg')
        .pipe(webp({
            quality: 20,
            resize: {
                width: 150,
                height: 150
            }
        }))
        .pipe(dest('./public/images'));
});

task('webp:watch', function () {
    watch('./src/assets/images/*.jpg', series('webp'));
});
