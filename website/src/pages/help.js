import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';

import styles from '../../static/css/modules.css';

const Help = props => {

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${useBaseUrl(
        'docs'
      )})`,
      title: 'Browse Docs',
    },
    {
      content:
        'Ask questions about the documentation and project in our [Slack.](https://react-native-elements-slack.herokuapp.com)',
      title: 'Join the community',
    },
    {
      content: `Find out what's new for each release by checking the [releases tab on the GitHub repo.](https://github.com/react-native-elements/react-native-elements/releases)`,
      title: 'Stay up to date',
    },
  ];

  return (
    <Layout className="mainContainer documentContainer postContainer">
      <div className="container margin-vert--xl">
        <header className="postHeader">
          <h2>Need help?</h2>
        </header>
        <p>
          Even with the great documentation, you're likely to get stuck at
          some point. If you've encountered a bug with React Native Elements,
          please{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            post an issue
          </a>{' '}
          and one of our maintainers will happily reach out to you. No
          question's too silly to ask but we recommend checking the
          documentation and{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues?utf8=✓&q="
            target="_blank"
            rel="noopener noreferrer"
          >
            existing issues
          </a>{' '}
          before opening and a new one.
        </p>
        <div className={styles.section}>
        <div className="container text--center margin-bottom--xl">
          <div className="row">
            <div className="col">
              <h2 className={clsx(styles.featureHeading)}>
                Browse Docs
              </h2>
              <p className="padding-horiz--md">
                Learn more using the 
                <a href="${docUrl('getting_started.html')}"> documentation on this site.</a>
              </p>
            </div>
            <div className="col">
              <h2 className={clsx(styles.featureHeading)}>
                Join the community
              </h2>
              <p className="padding-horiz--md">
                Ask questions about the documentation and project in our
                <a href="https://react-native-elements-slack.herokuapp.com"> Slack.</a>
              </p>
            </div>
            <div className="col">
              <h2 className={clsx(styles.featureHeading)}>
                Stay up to date
              </h2>
              <p className="padding-horiz--md">
                Find out what's new for each release by checking the 
                <a href="https://github.com/react-native-elements/react-native-elements/releases"> releases tab on the GitHub repo.</a>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
