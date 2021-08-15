const { exec } = require('child_process');

exec('yarn docs:build', (err) => {
  if (err) {
    console.log('[error]: update and commit docs', err);
    return;
  }
  exec('git status --porcelain', (err, stdout) => {
    if (err) {
      console.log('[error]: update and commit docs', err);
      return;
    }
    if (stdout.length) {
      exec("git add '*.md' && git commit -m 'Update Documentation'", (err) => {
        if (err) {
          console.log('[error]: update and commit docs', err);
          return;
        }
      });
    }
  });
});
