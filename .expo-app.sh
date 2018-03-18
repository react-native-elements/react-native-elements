#!/bin/sh

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  set -x
  # Configuring user
  git config --global user.email "x.villelegier@gmail.com"
  git config --global user.name "Xavier Villelégier"
  echo -e "machine github.com\n  login xavier-villelegier\n  password $GITHUB_TOKEN" >> ~/.netrc

  # Cloning examples app and installing modules
  git clone "https://github.com/react-native-training/react-native-elements-app.git"
  cd react-native-elements-app
  yarn add "https://github.com/${TRAVIS_REPO_SLUG}.git#${TRAVIS_PULL_REQUEST_SHA}"
  yarn
  yarn global add exp
  yarn global add qrcode-terminal

  # Login into expo and publishing app
  set +x
  exp login -u "$EXPO_LOGIN" -p "$EXPO_PASSWORD"
  set -x
  exp publish --release-channel ${TRAVIS_PULL_REQUEST_SHA}

  # Comment the PR
  EXPO_URL="https://exp.host/@xavier-villelegier/react-native-elements-app?release-channel=${TRAVIS_PULL_REQUEST_SHA}"
  COMMENT="URL: $EXPO_URL\n\n$(qrcode-terminal $EXPO_URL)"
  curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"$(echo -e $COMMENT)\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
