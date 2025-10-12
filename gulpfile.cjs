// gulpfile.cjs
const { src, dest, parallel, series } = require("gulp");
const through2 = require("through2");
const plumber = require("gulp-plumber");
const path = require("path");
const fs = require("fs"); // <- for deleting originals
const sharp = require("sharp");

// Reusable transform: resize to width, write under a subdir (fulls or thumbs)
function resizeTo(width, subdir) {
  return src(
    [
      "images/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
      // (keep this single-level glob as you had it)
    ],
    { base: "images", nodir: true }
  )
    .pipe(plumber())
    .pipe(
      through2.obj(async (file, _enc, cb) => {
        try {
          if (file.isNull()) return cb(null, file);
          if (!file.isBuffer()) return cb(new Error("Only buffer files supported"));

          const ext = path.extname(file.path).toLowerCase();
          const rel = path.relative(file.base, file.path);  // path under images/
          const outPath = path.join(file.base, subdir, rel); // images/<subdir>/...

          let img = sharp(file.contents)
              .withMetadata()
              .resize({ width, withoutEnlargement: true });

          // keep original format
          if (ext === ".png") {
            img = img.png({ compressionLevel: 9 });
          } else {
            img = img.jpeg({ quality: 85, progressive: true, mozjpeg: true });
          }

          const buf = await img.toBuffer();

          file.contents = buf;
          file.path = outPath;
          cb(null, file);
        } catch (err) {
          cb(err);
        }
      })
    )
    .pipe(dest("images"));
}

// Tasks that generate outputs
function large() { return resizeTo(1024, "fulls"); }   // you used "fulls" here
function thumbs() { return resizeTo(512,  "thumbs"); }

// 🔥 Delete the original source images AFTER both sizes are done
function cleanOriginals() {
  return src(
    ["images/*.{jpg,jpeg,png,JPG,JPEG,PNG}"],  // originals only
    { read: false, allowEmpty: true }
  ).pipe(
    through2.obj((file, _enc, cb) => {
      fs.unlink(file.path, (err) => cb(err, null));
    })
  );
}

exports.large = large;
exports.thumbs = thumbs;
exports.clean = cleanOriginals;
// run both resizes, then delete originals
exports.default = series(parallel(large, thumbs), cleanOriginals);
