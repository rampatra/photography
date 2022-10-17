#! /bin/bash

cp images/* images/fulls
cp images/fulls/* images/thumbs
echo "images transferred"
rm images/*.jpg
rm images/*.JPG
rm images/*.png
for f in images/thumbs/*; do convert "$f" -resize 510 "$f"; done 
echo "thumbs generated"

