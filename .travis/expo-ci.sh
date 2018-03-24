#!/bin/sh

# Configuring user
git config --global user.name "React Native Elements CI"
echo -e "machine github.com\n  login react-native-elements-ci\n  password $GITHUB_TOKEN" >> ~/.netrc

# Expo auto deployment for PRs
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  set -x

  # Cloning examples app and installing modules
  git clone "https://github.com/react-native-training/react-native-elements-app.git"
  cd react-native-elements-app
  yarn add "https://github.com/${TRAVIS_REPO_SLUG}.git#${TRAVIS_PULL_REQUEST_SHA}"
  yarn
  yarn global add exp
  # yarn global add qrcode-terminal

  # Login into expo and publishing app
  set +x
  exp login -u "$EXPO_LOGIN" -p "$EXPO_PASSWORD"
  set -x
  exp publish --release-channel ${TRAVIS_PULL_REQUEST_SHA}

  # Comment the PR
  EXPO_URL="https://exp.host/@xavier-villelegier/react-native-elements-app?release-channel=${TRAVIS_PULL_REQUEST_SHA}"
  QR_CODE_URL="![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$EXPO_URL)"
  COMMENT="Example app for $TRAVIS_PULL_REQUEST_SHA:\n\n$QR_CODE_URL\n\n$EXPO_URL"
  curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"$COMMENT\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
