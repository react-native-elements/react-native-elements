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

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

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

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo-icon.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={`${siteConfig.baseUrl}docs/overview.html`}>
              View Components
            </Button>
            <Button href="https://expo.io/@monte9/react-native-elements-app">
              Try It Out
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
  >
    <GridBlock
      align={props.align}
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

Block.defaultProps = {
  align: 'center',
};

const Features = () => (
  <Block layout="fourColumn" background="light">
    {[
      {
        title: 'Cross-Platform',
        content: `Consistent design across android, iOS and [web!](${
          siteConfig.baseUrl
        }blog/2018/12/13/react-native-web.html)`,
      },
      {
        title: 'Easy to use',
        content:
          'Built completely in Javascript. Starting your react native app has never been easier. Supports Expo too! ',
      },
      {
        title: 'Customizable',
        content: 'Easily style any of our components just the way you want.',
      },
      {
        title: 'Community-Driven',
        content: `100% built by the community. We're here because we love open source.`,
      },
    ]}
  </Block>
);

const ExampleApp = () => (
  <Block id="home-example" align="left">
    {[
      {
        title: 'See it in action',
        content: `Want to see what it looks like? Be sure to check out our example Expo app which shows all the components action.
        <br /><br />Get it [here.](https://expo.io/@monte9/react-native-elements-app)`,
        image: imgUrl('app-preview.png'),
        imageAlign: 'left',
      },
    ]}
  </Block>
);

const SHOWCASE_PROJECTS = [
  {
    name: 'Le Cheese',
    website: 'https://lecheese.app',
    image_url: 'https://i.imgur.com/1JJk7kK.png',
  },
  {
    name: 'Recruit App',
    website: 'https://recruitapp.io',
    image_url: 'https://i.imgur.com/kAzUV9w.png',
  },
  {
    name: 'AWS Amplify',
    website: 'https://github.com/aws-amplify/amplify-js',
    image_url: 'https://i.imgur.com/foHIkil.png',
  },
  {
    name: 'Bookcas',
    website:
      'https://medium.com/@austinhale/building-a-mobile-app-in-10-days-with-react-native-c2a7a524c6b4',
    image_url: 'https://i.imgur.com/WZz1HBL.png',
  },
];

const DisplayShowcaseProjects = ({ projects }) =>
  projects.map((project, index) => (
    <a href={project.website} className="link" target="_blank">
      <img src={project.image_url} />
      <span className="caption">{project.name}</span>
    </a>
  ));

const Showcase = () => (
  <section className="productShowcaseSection showcase-container paddingTop">
    <h2>Who's using React Native Elements?</h2>
    <p className="subtitle">
      React Native Elements is helping these apps look beautiful...
    </p>
    <div className="showcase">
      <DisplayShowcaseProjects projects={SHOWCASE_PROJECTS} />
    </div>
  </section>
);

const OpenCollective = () => (
  <section className="productShowcaseSection open-collective paddingBottom">
    <h2>Open Collective</h2>
    <p className="subtitle">Built with passion, backed by the community</p>

    <p>
      Open Collective is an initiative that allows community members an easy and
      transparent way to donate to open source projects. <br />
    </p>

    <div className="backers-section">
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

    <div className="backers-section">
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
  </section>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="home">
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <ExampleApp />
          <Showcase />
          <OpenCollective />
        </div>
      </div>
    );
  }
}

module.exports = Index;
