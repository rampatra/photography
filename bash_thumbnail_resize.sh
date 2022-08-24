#! /bin/bash

cp images/* images/fulls
cp images/* images/thumbs
for f in /images/thumbs/; do convert "$f" -resize 510 "$f"; done 
