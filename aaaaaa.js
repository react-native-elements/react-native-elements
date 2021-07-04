const fs = require('fs');

fs.readdirSync('./src').forEach(function (filename) {
  if (['index.ts', 'ls.js', 'helpers', 'config'].includes(filename)) return;
  let content = fs.readFileSync('src/' + filename + '/index.tsx', 'utf-8');
  content = content.replace(
    'export default',
    `/**
 * RNE ${filename}
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/${filename.toLowerCase()})
 */
export default`
  );
  fs.writeFileSync('src/' + filename + '/index.tsx', content, 'utf-8');
});
