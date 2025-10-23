# Photography Portfolio

A modern, optimized Jekyll website for photographers with automatic EXIF data display and image optimization.

## Features

- **Easy Setup** - Get your own photography portfolio site for __free__ with GitHub Pages
- **Zero Code Changes** - Just upload pictures, no coding required
- **EXIF Data Display** - Automatically shows __aperture, shutter speed, ISO__ and camera model
- **Modern Performance** - Lazy loading, compressed assets, and optimized images
- **Responsive Design** - Works beautifully on all devices
- **Automated Image Processing** - Modern Gulp workflow with Sharp for fast image optimization

## Recent Optimizations (2025)

- ✅ Updated to Gulp 5 and modern Node.js dependencies
- ✅ Replaced ImageMagick with Sharp for faster image processing
- ✅ Added lazy loading for images
- ✅ Removed legacy IE8/IE9 support code
- ✅ Added modern Google Analytics 4 support
- ✅ Implemented script deferring for better performance
- ✅ Added SASS compression and HTML minification
- ✅ Improved SEO with meta tags and structured data
- ✅ Enhanced form with spam protection and validation

## Quick Start

**Get your photography website live in minutes:**

1. **Fork this repo** - Click the `Fork` button at the top right
2. **Enable GitHub Pages** - Go to repo Settings → Pages → Enable from main branch
3. **Upload your pictures** to `images/fulls` and `images/thumbs` directories
4. **Configure your site** - Edit `_config.yml` with your details:
   - Change `title`, `author`, `bio`
   - Add your social media URLs
   - Add Google Analytics ID (optional)
5. **Custom domain** (optional) - Edit `CNAME` file or remove it to use `username.github.io/photography`

Your site will be live at your custom domain or `https://yourusername.github.io/photography`

## Advanced: Automated Image Processing

For the best workflow, use the automated image processing pipeline:

### Prerequisites

- Node.js 18+ and npm
- Ruby and Bundler (for Jekyll)

### Setup

```bash
# Clone your forked repo
git clone https://github.com/yourusername/photography.git
cd photography

# Install dependencies
npm install
bundle install
```

### Image Processing Workflow

```bash
# 1. Add your high-resolution photos to the images/ directory
cp ~/Photos/*.jpg images/

# 2. Run Gulp to automatically:
#    - Resize images to 1024px (fulls)
#    - Generate 512px thumbnails
#    - Optimize with MozJPEG compression
npm run build

# 3. Optimize existing images (optional)
gulp optimize

# 4. Commit and push
git add .
git commit -m "Add new photos"
git push origin main
```

### Available Gulp Tasks

- `gulp` or `npm run build` - Process new images from images/ directory
- `gulp resize` - Only resize images (no cleanup)
- `gulp optimize` - Optimize existing images in fulls/thumbs
- `gulp clean` - Remove original images after processing

## Configuration

Edit `_config.yml` to customize:

```yaml
title: "Your Photography Site"
author: "Your Name"
bio: "Your bio here"
google_analytics: "G-XXXXXXXXXX"  # Your GA4 ID
social_urls:
  instagram: "https://instagram.com/yourhandle"
  # ... add your social profiles
```

## Contact Form Setup

The contact form uses Formspree. To activate:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `index.html` with your Formspree form ID

Or use Netlify Forms if hosting on Netlify (already configured).

## Local Development

```bash
# Build and serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Performance

This template is optimized for performance:

- Progressive JPEG images
- Lazy loading for images
- Deferred JavaScript loading
- Compressed CSS/HTML
- Optimized for Core Web Vitals

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). IE support removed for better performance.

## Credits

- Template by [AJ](https://twitter.com/ajlkn)
- Jekyll enhancement by [Ram Patra](https://github.com/ramswaroop)
- 2025 optimizations and modernization

## License

MIT License - feel free to use for your photography portfolio!


