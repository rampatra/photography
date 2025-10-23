const gulp = require('gulp');
const sharp = require('sharp');
const { deleteAsync } = require('del');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const { Transform } = require('stream');

// Custom sharp transform for resizing images
function createResizeTransform(width, quality = 85) {
    return new Transform({
        objectMode: true,
        async transform(file, encoding, callback) {
            if (file.isBuffer()) {
                try {
                    file.contents = await sharp(file.contents)
                        .resize(width, null, {
                            withoutEnlargement: true,
                            fit: 'inside'
                        })
                        .jpeg({ quality, progressive: true })
                        .toBuffer();
                    callback(null, file);
                } catch (err) {
                    callback(err);
                }
            } else {
                callback(null, file);
            }
        }
    });
}

// Resize images to fulls (1024px) and optimize
async function resizeFulls() {
    return gulp.src('images/*.{jpg,jpeg,png,JPG,JPEG,PNG}')
        .pipe(createResizeTransform(1024, 90))
        .pipe(imagemin([
            mozjpeg({ quality: 90, progressive: true })
        ]))
        .pipe(gulp.dest('images/fulls'));
}

// Resize images to thumbs (512px) and optimize
async function resizeThumbs() {
    return gulp.src('images/*.{jpg,jpeg,png,JPG,JPEG,PNG}')
        .pipe(createResizeTransform(512, 85))
        .pipe(imagemin([
            mozjpeg({ quality: 85, progressive: true })
        ]))
        .pipe(gulp.dest('images/thumbs'));
}

// Delete original images after processing
async function cleanOriginals() {
    return deleteAsync(['images/*.{jpg,jpeg,png,JPG,JPEG,PNG}']);
}

// Optimize existing images in place
async function optimizeExisting() {
    return gulp.src('images/{fulls,thumbs}/*.{jpg,jpeg,png,JPG,JPEG,PNG}')
        .pipe(imagemin([
            mozjpeg({ quality: 90, progressive: true })
        ]))
        .pipe(gulp.dest(file => file.base));
}

// Export tasks
exports.resizeFulls = resizeFulls;
exports.resizeThumbs = resizeThumbs;
exports.resize = gulp.parallel(resizeFulls, resizeThumbs);
exports.clean = cleanOriginals;
exports.optimize = optimizeExisting;
exports.default = gulp.series(
    gulp.parallel(resizeFulls, resizeThumbs),
    cleanOriginals
);