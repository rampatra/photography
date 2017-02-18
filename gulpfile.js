var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
    gulp.src('images/fulls/*')
        .pipe(imageResize({
            width: 1024
        }))
        .pipe(gulp.dest('images/fulls'));
    gulp.src('images/fulls/*')
        .pipe(imageResize({
            width: 360
        }))
        .pipe(gulp.dest('images/thumbs'));
});