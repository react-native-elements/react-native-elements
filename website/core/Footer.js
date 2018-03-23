/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="120"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting_started.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('overview.html', this.props.language)}>
              Components
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://reactnativetraining.herokuapp.com/"
              target="_blank"
            >
              Chat with us on Slack
            </a>
            <a
              href="https://github.com/react-native-training/react-native-elements/issues/"
              target="_blank"
            >
              Submit a bug or feature
            </a>
            <a
              href="https://opencollective.com/react-native-elements"
              target="_blank"
            >
              Support us on Open Collective
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.repoUrl} target="blank">
              GitHub
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright-logo-container">
          <a href="http://reactnative.training" target="_blank">
            <img
              src={this.props.config.baseUrl + 'img/react-native-training.png'}
              alt="React Native Training"
              width="90"
            />
          </a>
        </section>
        <section className="copyright">
          Copyright &copy; {currentYear} React Native Training
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
