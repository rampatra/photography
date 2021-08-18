var fs = require('fs');
const sharp = require('sharp');
const imagesFolder = './images/';

fs.readdir(imagesFolder, { withFileTypes: true }, (err, files) => {

  // Filter out subdirectories (only keep the files)
  files = files.filter( (file) => file.isFile() )

  files.forEach( async (file) => {

    let shouldDeleteFile = true

    // // Resize to full
    err = await resize(file.name, 'full')
    if(err) shouldDeleteFile = false

    // // Resize to thumbnail
    err = await resize(file.name, 'thumb')
    if(err) shouldDeleteFile = false

    // // Delete Original File
    if( shouldDeleteFile ){
      fs.unlink(imagesFolder + file.name, (err) => {
        if (err) throw err;
      });
    }

  });
});


// Helper function to resize images using sharp
async function resize(fileName, size) {
  let sizeMap = {
    'full' : {width: 1024, height:768, location:'./images/fulls'},
    'thumb' : {width: 512, height:256, location:'./images/thumbs'}
  }
  let newImage = sizeMap[size]

  // Convert to 1024 / Fullsize
  sharp('./images/' + fileName)
  .resize(newImage.width, newImage.height)
  .toFile(`${newImage.location}/${fileName}`, (err, info) => { 
    if (err) return 'error'
  });
}