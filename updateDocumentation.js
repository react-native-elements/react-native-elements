const { exec } = require('child_process');

exec('yarn docs:build', (err) => {
  if (err) {
    return;
  }
  exec('git status --porcelain', (err, stdout) => {
    if (err) {
      return;
    }
    if (stdout.length) {
      exec("git add '*.md' && git commit -m 'Update Documentation'", (err) => {
        if (err) {
          return;
        }
      });
    } else {
      console.log('No changes to commit.');
    }
  });
});
