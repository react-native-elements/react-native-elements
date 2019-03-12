const React = require('react');
const { Container, GridBlock } = require('../../core/CompLibrary');

const Help = props => {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'getting_started.html'
      )})`,
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
            some point. If you've encountered a bug with React Native Elements,
            please{' '}
            <a
              href="https://github.com/react-native-training/react-native-elements/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              post an issue
            </a>{' '}
            and one of our maintainers will happily reach out to you. No
            question's too silly to ask but we recommend checking the
            documentation and{' '}
            <a
              href="https://github.com/react-native-training/react-native-elements/issues?utf8=✓&q="
              target="_blank"
              rel="noopener noreferrer"
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
};

module.exports = Help;
