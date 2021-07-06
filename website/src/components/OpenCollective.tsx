import React from 'react';

const OpenCollective: React.FC<{}> = () => (
  <div className="container">
    <div className="text--center">
      <h1 className="hero__title gradient clip-text ">Open Collective</h1>
      <h4 className="subtitle  margin-horiz--md  ">
        Built with passion, backed by the community
      </h4>

      <p className="p--desc">
        Open Collective is an initiative that allows community members an easy
        and transparent way to donate to open source projects. <br />
      </p>
    </div>

    <div className="row">
      <div className="col col--6">
        <div className="backers-section text--center">
          <h3>Backers</h3>
          <p className="p--desc">
            Support us with a monthly donation and help us continue our
            activities.
          </p>

          <a
            href="https://opencollective.com/react-native-elements#backers"
            target="_blank"
          >
            <img src="https://opencollective.com/react-native-elements/backers.svg?width=695" />
          </a>
        </div>
      </div>
      <div className="col col--6">
        <div className="backers-section text--center">
          <h3>Sponsors</h3>
          <p className="p--desc ">
            Become a sponsor and get your logo on our README on GitHub with a
            link to your site.
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
    </div>
  </div>
);

export default OpenCollective;
