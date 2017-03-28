var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var del = require('del');

gulp.task('resize', function () {
    gulp.src('images/*.*')
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/fulls'));
    gulp.src('images/*.*')
        .pipe(imageResize({
            width: 512,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/thumbs'));
});

gulp.task('del', function () {
    return del(['images/*.*']);
});

gulp.task('default', ['resize', 'del']);