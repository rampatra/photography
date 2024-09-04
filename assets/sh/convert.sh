#!/bin/bash
# get all JPG, jpg, png
for file in /app/images/fulls/* ; do
    f=$(basename $file)
    [ -f /app/images/thumbs/$f ] || convert /app/images/fulls/$f -resize 512x /app/images/thumbs/$f
done

