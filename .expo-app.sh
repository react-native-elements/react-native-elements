#!/bin/sh

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  set -x
  # Configuring user
  git config --global user.email "x.villelegier@gmail.com"
  git config --global user.name "Xavier Villelégier"
  echo -e "machine github.com\n  login xavier-villelegier\n  password $GITHUB_TOKEN" >> ~/.netrc

  # Cloning examples app
  git clone "https://github.com/react-native-training/react-native-elements-app.git"
  cd react-native-elements-app
  yarn add "https://github.com/${TRAVIS_REPO_SLUG}.git#${TRAVIS_COMMIT}"
  yarn
  yarn global add exp
  set +x
  exp login -u "$EXPO_LOGIN" -p "$EXPO_PASSWORD"
  set -x
  COMMENT=$(exp publish --release-channel ${TRAVIS_COMMIT})
  curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"$(echo $COMMENT)\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
