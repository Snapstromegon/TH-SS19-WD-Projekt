const
    { src, dest, task, watch, series } = require('gulp'),
    // Gulp Plugins
    cleanCss = require('gulp-clean-css'),
    sass = require('gulp-sass');

    task('sass', function () {
        return src('./scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCss())
            .pipe(dest('./css'));
    });

    task('sass:watch', function () {
        watch('./scss/**/*.scss', series('sass'));
    });
