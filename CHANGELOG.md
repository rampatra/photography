# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2025-10-23

### Added
- Lazy loading for images with `loading="lazy"` attribute
- Async decoding for images with `decoding="async"`
- Proper alt text for accessibility
- SEO meta tags (description, author)
- DNS prefetch for Google Analytics
- Modern Google Analytics 4 (gtag.js) support
- Form validation and accessibility attributes (required, aria-label)
- Netlify Forms and Formspree integration for contact form
- HTML compression via jekyll-compress-html
- SASS compression in Jekyll config
- SEO plugin support (jekyll-seo-tag)
- Comprehensive .gitignore updates for modern tooling
- NPM scripts for easier workflow (`npm run build`, `npm run optimize-images`)
- This CHANGELOG file

### Changed
- **Major dependency updates:**
  - Gulp 3.9.1 → 5.0.0
  - del 2.2.2 → 7.1.0
  - Replaced gulp-image-resize (ImageMagick) with Sharp 0.33.0
  - Added gulp-imagemin 9.1.0 with MozJPEG optimization
- **Gulpfile modernization:**
  - Migrated from Gulp 3 to Gulp 5 syntax
  - Replaced task dependencies with `gulp.series()` and `gulp.parallel()`
  - Implemented Sharp for faster image processing
  - Added progressive JPEG optimization
  - Improved error handling
  - Added separate tasks for fulls/thumbs processing
- **Performance optimizations:**
  - Added `defer` attribute to all JavaScript files
  - Removed blocking scripts
  - Improved script loading order
- **Code cleanup:**
  - Removed all IE8/IE9 specific code
  - Removed IE conditional comments from HTML
  - Removed IE-specific CSS files from header
  - Removed IE-specific JavaScript (respond.min.js, html5shiv.js)
  - Cleaned up main.js by removing IE version checks
- **Jekyll configuration:**
  - Added exclude list for build artifacts
  - Configured SASS compression
  - Added HTML compression settings
  - Added plugins configuration
- **Gemfile updates:**
  - Added jekyll-seo-tag
  - Added jekyll-compress-html
- **README complete rewrite:**
  - Modern setup instructions
  - Detailed optimization list
  - Better workflow documentation
  - Updated prerequisites and dependencies

### Removed
- Legacy Internet Explorer 8/9/10 support code
- IE-specific polyfills and shims
- IE conditional comments
- Outdated ImageMagick-based image processing
- Unnecessary IE CSS workarounds in main.js

### Performance Improvements
- Images now use progressive JPEG format
- Lazy loading reduces initial page load
- Deferred JavaScript improves First Contentful Paint
- Compressed assets reduce bandwidth usage
- Modern image optimization with Sharp (faster than ImageMagick)
- HTML/CSS minification reduces file sizes

### Developer Experience
- Modern ES6+ syntax in gulpfile
- Better error handling in build process
- Clearer task names and documentation
- Faster image processing with Sharp
- More flexible Gulp tasks

## [2.0.1] - Previous

Initial version with Jekyll support and EXIF data display.
