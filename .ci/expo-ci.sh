#!/bin/bash

# Configure user
git config --global user.name "React Native Elements CI"
echo -e "machine github.com\n login react-native-elements-ci\n password $GITHUB_TOKEN" >> ~/.netrc

# Expo auto deployment for PRs
if [ "$TRAVIS_PULL_REQUEST" != "false" -a "$TRAVIS_PULL_REQUEST_SLUG" == "react-native-training/react-native-elements" ]; then
  set -x

  # Clone example app and install modules
  git clone "https://github.com/react-native-training/react-native-elements-app.git"
  cd react-native-elements-app
  yarn add "https://github.com/${TRAVIS_PULL_REQUEST_SLUG}.git#${TRAVIS_PULL_REQUEST_SHA}"
  yarn
  yarn global add exp

  # Login into expo and publish the example app
  set +x
  exp login -u "$EXPO_LOGIN" -p "$EXPO_PASSWORD"  --non-interactive
  set -x
  exp publish --release-channel ${TRAVIS_PULL_REQUEST_SHA}

  # Comment the PR
  cd ../.ci
  yarn
  node index.js
fi
