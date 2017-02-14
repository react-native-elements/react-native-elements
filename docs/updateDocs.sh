echo "Building Website from markdown"
mkdocs build
echo "Upating Website"
/bin/cp -fR site/* ../
