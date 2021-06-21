import React from 'react';
import Layout from '@theme/Layout';

const Help: React.FunctionComponent<{}> = (props) => {
  type SupportLinkTypes = {
    content: string;
    title: string;
    link: string;
    href: string;
  };

  const supportLinks: SupportLinkTypes[] = [
    {
      content: 'Learn more using the ',
      title: 'Browse Docs',
      link: 'documentation on this site.',
      href: 'docs',
    },
    {
      content: 'Ask questions about the documentation and project in our ',
      title: 'Join the community',
      link: 'Slack.',
      href: 'https://react-native-elements-slack.herokuapp.com',
    },
    {
      content: `Find out what's new for each release by checking the `,
      title: 'Stay up to date',
      link: 'releases tab on the GitHub repo.',
      href:
        'https://github.com/react-native-elements/react-native-elements/releases',
    },
  ];

  const FeatureHeading: React.FunctionComponent<{}> = (props) => {
    return (
      <div className="row">
        {supportLinks.map((link) => {
          return (
            <div className="col">
              <h2>{link.title}</h2>
              <p className="padding-horiz--md">
                {link.content} <a href={link.href}>{link.link}</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Layout className="mainContainer documentContainer postContainer">
      <div className="container margin-vert--xl">
        <header className="postHeader">
          <h2>Need help?</h2>
        </header>
        <p>
          Even with the great documentation, you're likely to get stuck at some
          point. If you've encountered a bug with React Native Elements, please{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            post an issue
          </a>{' '}
          and one of our maintainers will happily reach out to you. No
          question's too silly to ask but we recommend checking the
          documentation and{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            existing issues
          </a>{' '}
          before opening and a new one.
        </p>
        <div>
          <div className="container text--center margin-bottom--xl">
            <FeatureHeading />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
