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
import '../../static/css/components.css';

type ButtonTypes = {
  href: string;
  target: string;
  children: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonTypes> = (props) => {
  return (
    <div className="pluginWrapper buttonWrapper">
      <a className="button" href={props.href} target={props.target}>
        {props.children}
      </a>
    </div>
  );
};

Button.defaultProps = {
  target: '_self',
};

type BlockTypes = {
  children: React.ReactNode;
  align: string;
};

const Block: React.FunctionComponent<BlockTypes> = (props) => (
  <section className="margin-vert--xl">
    <div className="container">
      <div className="row">{props.children}</div>
    </div>
  </section>
);

Block.defaultProps = {
  align: 'center',
};

const OpenCollective: React.FunctionComponent<{}> = () => (
  <div className="container">
    <div className="backers-section text--center">
      <h1>Open Collective</h1>
      <p className="subtitle">Built with passion, backed by the community</p>

      <p>
        Open Collective is an initiative that allows community members an easy
        and transparent way to donate to open source projects. <br />
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

type FeatureTypes = {
  title: string;
  description: string;
};

const features: FeatureTypes[] = [
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

const Home: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero ">
        <div className="container">
          <div className="row">
            <div className="col col--3 col--offset-1">
              <img src="https://rne.gallerycdn.vsassets.io/extensions/rne/snippets/1.2.1/1622009552732/Microsoft.VisualStudio.Services.Icons.Default" />
            </div>
            <div className="col col--6 col--offset-1">
              <h1 className="hero__title">{siteConfig.tagline}</h1>
              <h1 className="hero__subtitle">
                A React Native framework for making cross-platform applications
              </h1>
              <div>
                <Link
                  className={clsx(
                    'button button--primary button--lg margin-right--sm '
                  )}
                  style={{ color: 'white' }}
                  to={useBaseUrl('/docs')}
                >
                  Get Started
                </Link>

                <Link
                  className={clsx(
                    'button button--secondary button--outline button--lg heroButton'
                  )}
                  to={'https://react-native-elements.js.org/'}
                >
                  Playground 🚀
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="margin-vert--xl">
        <div className="container">
          <div className="row">
            {features.map(({ title, description }, index) => (
              <div
                key={index}
                className="col col--3 "
                style={{
                  alignItems: 'stretch',
                  display: 'flex',
                }}
              >
                <div className="card shadow--md">
                  <div className="card__body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <img src="/img/app-preview.png" />
      </div>
      <div className="container">
        <div
          className="snackPlayer"
          data-snack-id="@arpitbhalla/rne-demo"
          data-snack-platform="web"
          data-snack-preview="true"
          data-snack-theme="dark"
        />
      </div>
      <OpenCollective />
    </Layout>
  );
};

export default Home;
