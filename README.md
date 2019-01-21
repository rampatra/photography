# Photography
A jekyll website to host photography from Jacob Hauptman

## Setup
All technical setup instructions including how to upload pictures, configure the email, and run locally in the original repo [README]( https://github.com/rampatra/photography)

## ProTips
I have made this as an [npm](https://www.npmjs.com) package with [gulp](http://gulpjs.com/) to __automate image resizing
and thumbnail generation__. So if you're lazy like me then you can just do the following before you push your images to github.

1. Fork and then clone the project to your computer
2. Go inside the project `$ cd photography`
3. Install all dependencies by `$ npm install`
4. Copy all your pictures (possibly jpg, the largest size available, straight from your camera) and put it inside `images` directory
5. Run `$ gulp` to resize the images and to generate thumbnails automatically
6. Push your changes to github.com by `$ git add --all` and `$ git commit -m "a nice commit message"` and then finally `$ git push origin master`

#Contact
Please reach out to [@MattWolfson](https://github.com/mattwolfson) with any questions

## Credits
Thanks to [AJ](https://twitter.com/ajlkn) for the website template and [Ram](https://www.twitter.com/ram__patra) for creating the original repo as well as enhancing with [jekyll](http://jekyllrb.com/).


