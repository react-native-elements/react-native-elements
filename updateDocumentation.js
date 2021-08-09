const { exec } = require('child_process');

exec('yarn docs:build', (err, stdout, stderr) => {
  if (err) {
    return;
  }
  exec('git status --porcelain', (err, stdout, stderr) => {
    if (err) {
      return;
    }
    if (stdout.length) {
      exec(
        "git add '*.md' && git commit -m 'Update Documentation'",
        (err, stdout, stderr) => {
          if (err) {
            return;
          }
        }
      );
    } else {
      console.log('No changes to commit.');
    }
  });
});
