#!/bin/sh

# Configure user
git config --global user.name "React Native Elements CI"
echo -e "machine github.com\n login react-native-elements-ci\n password $GITHUB_TOKEN" >> ~/.netrc

# Expo auto deployment for PRs
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
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
  EXPO_URL="https://exp.host/@rn-elements/react-native-elements-app?release-channel=${TRAVIS_PULL_REQUEST_SHA}"
  QR_CODE_URL="![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$EXPO_URL)"
  COMMENT="Example app for $TRAVIS_PULL_REQUEST_SHA:\n\n$QR_CODE_URL\n\n$EXPO_URL"
  curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"$COMMENT\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
