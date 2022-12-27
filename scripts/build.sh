

for file in 'package.json' 'CHANGELOG.md' 'README.md' 'LICENSE'  ;  do cp "$file" "dist/$file"; done


echo $(pwd)
