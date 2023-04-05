'use strict';

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
// use gulp-dart-sass instead of gulp-dart
// bc gulp-dart depends on python2 os dep and node-gyp which is notorious difficult to build
// https://github.com/dlmanning/gulp-sass/issues/782#issuecomment-754589416
var sass = require('gulp-dart-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('resize', function () {
    return gulp.src('images/*.*')
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/fulls'))
        .pipe(imageResize({
            width: 512,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/thumbs'));
});

gulp.task('del', ['resize'], function () {
    return del(['images/*.*']);
});

// compile scss to css
gulp.task('sass', function () {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest('./assets/css'));
});

// watch changes in scss files and run sass task
gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// minify js
gulp.task('minify-js', function () {
    return gulp.src('./assets/js/main.js')
        .pipe(uglify())
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest('./assets/js'));
});

// default task
gulp.task('default', ['del']);

// scss compile task
gulp.task('compile-sass', ['sass', 'minify-js']);
