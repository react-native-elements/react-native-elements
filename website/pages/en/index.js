/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
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

const ProjectTitle = props => (
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
            <Button href={`${siteConfig.baseUrl}docs/0.19.0/overview.html`}>
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

const Features = props => (
  <Block layout="fourColumn" background="light">
    {[
      {
        title: 'Cross-Platform',
        content: 'Consistent design across android, iOS and soon the web!',
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

const ExampleApp = props => (
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
        href="https://opencollective.com/react-native-elements/backer/0/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/0/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/1/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/1/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/2/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/2/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/3/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/3/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/4/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/4/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/5/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/5/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/6/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/6/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/7/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/7/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/8/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/8/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/9/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/9/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/10/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/10/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/11/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/11/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/12/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/12/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/13/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/13/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/14/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/14/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/15/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/15/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/16/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/16/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/17/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/17/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/19/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/19/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/20/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/20/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/21/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/21/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/22/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/22/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/23/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/23/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/24/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/24/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/25/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/25/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/26/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/26/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/27/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/27/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements/backer/28/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/backer/28/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements?utm_source=opencollective&utm_medium=github&utm_campaign=react-native-elements#about"
        target="_blank"
      >
        <img src="https://opencollective.com/static/images/become_backer.svg" />
      </a>
    </div>

    <div className="backers-section">
      <h3>Sponsors</h3>
      <p>
        Become a sponsor and get your logo on our README on Github with a link
        to your site.{' '}
        <a href="https://opencollective.com/react-native-elements#sponsor">
          Become a sponsor
        </a>
      </p>
      <a
        href="https://opencollective.com/react-native-elements/sponsor/0/website"
        target="_blank"
      >
        <img src="https://opencollective.com/react-native-elements/sponsor/0/avatar.svg" />
      </a>
      <a
        href="https://opencollective.com/react-native-elements?utm_source=opencollective&utm_medium=github&utm_campaign=react-native-elements#about"
        target="_blank"
      >
        <img src="https://camo.githubusercontent.com/f9c02de8584b51d9c8852071760b9f19f3936a0f/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f617065782f73706f6e736f72732f322f617661746172" />
      </a>
    </div>
  </section>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <ExampleApp />
          <OpenCollective />
        </div>
      </div>
    );
  }
}

module.exports = Index;
