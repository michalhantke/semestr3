const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

const css = function() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"))
};

const minification = function() {
    return gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
};

exports.default = css;
exports.minification = minification;