/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from '../../static/css/modules.css';

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const Block = props => (
  <section className="margin-vert--xl">
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
  </section>
);

Block.defaultProps = {
  align: 'center',
};

const OpenCollective = () => (
  <div className="container">
    <div className="backers-section text--center">
      <h1>Open Collective</h1>
      <p className="subtitle">Built with passion, backed by the community</p>

      <p>
        Open Collective is an initiative that allows community members an easy and
        transparent way to donate to open source projects. <br />
      </p>
    </div>
    <div className="backers-section text--center">
      <h3>Backers</h3>
      <p>
        Support us with a monthly donation and help us continue our activities.
      </p>

      <a
        href="https://opencollective.com/react-native-elements#backers"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backers.svg?width=695" />
      </a>
    </div>

    <div className="backers-section text--center">
      <h3>Sponsors</h3>
      <p>
        Become a sponsor and get your logo on our README on GitHub with a link
        to your site.{' '}
        <a href="https://opencollective.com/react-native-elements#sponsor">
          Become a sponsor
        </a>
      </p>

      <a
        href="https://opencollective.com/react-native-elements#sponsors"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/sponsors.svg" />
      </a>
    </div>
  </div>
);

const features = [
  {
    title: 'Cross-Platform',
    description: 'Consistent design across android, iOS, and web',
  },
  {
    title: 'Easy to use',
    description:
      'Built completely in Javascript. Starting your react native app has never been easier. Supports Expo too! ',
  },
  {
    title: 'Customizable',
    description: 'Easily style any of our components just the way you want.',
  },
  {
    title: 'Community-Driven',
    description: `100% built by the community. We're here because we love open source.`,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero text--center">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div>
            <Link
              className={clsx(
                'button button--secondary button--outline button--lg margin-right--sm',
                styles.heroButton
              )}
              style={{color: 'white'}}
              to={useBaseUrl('/docs')}
            >
              Read docs
            </Link>

            <Link
              className={clsx(
                'button button--secondary button--outline button--lg',
                styles.heroButton
              )}
              style={{color: 'white'}}
              to={
                'https://expo.io/@flyingcircle/react-native-elements-app'
              }
            >
              Try the demo app
            </Link>
          </div>
        </div>
      </header>

      {features && features.length && (
        <section className="margin-vert--xl">
          <div className="container">
            <div className="row">
              {features.map(({ title, description }, i) => (
                <div key={i} className="col col--3">
                  <h3>{title}</h3>
                  <p className="margin--none">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <OpenCollective />
    </Layout>
  );
}

export default Home;