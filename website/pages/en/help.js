/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        content:
          'Learn more using the [documentation on this site.](/docs/getting-started.html)',
        title: 'Browse Docs',
      },
      {
        content:
          'Ask questions about the documentation and project in our [Slack.](https://reactnativetraining.herokuapp.com/)',
        title: 'Join the community',
      },
      {
        content: `Find out what's new for each release by checking the [releases tab on the Github repo.](https://github.com/react-native-training/react-native-elements/releases)`,
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Need help?</h2>
            </header>
            <p>
              Even with the great documentation, you're likely to get stuck at
              some point. If you've encountered a bug with React Native
              Elements, please{' '}
              <a
                href="https://github.com/react-native-training/react-native-elements/issues/new"
                target="_blank"
              >
                post an issue
              </a>{' '}
              and one of our maintainers will happily reach out to you. No
              question's too silly to ask but we recommend checking the
              documentation and{' '}
              <a
                href="https://github.com/react-native-training/react-native-elements/issues?utf8=✓&q="
                target="_blank"
              >
                existing issues
              </a>{' '}
              before opening and a new one.
            </p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
