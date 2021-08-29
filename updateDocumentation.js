const { exec } = require('child_process');

exec('yarn docs:build', (err) => {
  if (err) {
    console.log('[error]: update and commit docs', err);
    return;
  }
  exec('git status --porcelain', (gitError, stdout) => {
    if (gitError) {
      console.log('[error]: update and commit docs', gitError);
      return;
    }
    if (stdout.length) {
      exec(
        "git add '*.md' && git commit -m 'Update Documentation'",
        (commitError) => {
          if (commitError) {
            console.log('[error]: update and commit docs', commitError);
            return;
          }
        }
      );
    }
  });
});
