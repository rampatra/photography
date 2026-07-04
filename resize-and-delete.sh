for f in images/*.jpg; do
	convert "$f" -resize 1024x "images/fulls/$(basename "$f")"
	convert "$f" -resize 512x "images/thumbs/$(basename "$f")"
	mv "$f" /tmp
done
